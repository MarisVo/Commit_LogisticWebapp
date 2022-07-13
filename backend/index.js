import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import YAML from "yamljs";
import { Server } from "socket.io";

import authRoute from "./router/auth.js";
import adminRoute from "./router/admin/index.js";
import trackingRoute from "./router/tracking.js";
import orderRoute from "./router/order.js";
import aboutRoute from "./router/about.js";
import publicRoute from "./router/public.js";
import contactUsRoute from "./router/contactUs.js";
import commitmentRoute from "./router/commitment.js";
import partnerRoute from "./router/partner.js";
import contactMsgRoute from "./router/contactMsg.js";
import consultancyRoute from "./router/consultancy.js";
import quoteRoute from "./router/quote.js";
import warehouseRoute from "./router/warehouse.js";
import participantRoute from "./router/participant.js";

// swagger setup
import swaggerUi from "swagger-ui-express";
const swaggerDocument = YAML.load("./swagger.yaml");

import { verifyAdmin, verifyToken } from "./middleware/index.js";
import { clearTokenList } from "./service/jwt.js";
import { NOTIFY_EVENT } from "./constant.js";
import { handleDisconnect, sendNotify } from "./socket/handle.js";
import notificationRoute from "./router/notification.js";
dotenv.config();

/**
 * Connect MongoDB
 */
mongoose
  .connect(process.env.MONGO_URI, () => {
    console.log("Connect MongoDB successfully.");
  })
  .catch((error) => console.log(error.reason));

const PORT = process.env.PORT || 8000;
export const TOKEN_LIST = {};
export const TOKEN_BLACKLIST = {};
export const SOCKET_SESSIONS = [];
const app = express();
const io = new Server(process.env.SOCKET_PORT, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use("/api/public", publicRoute)
  .use("/api/admin", verifyToken, verifyAdmin, adminRoute)
  .use("/api/auth", authRoute)
  .use("/api/tracking", trackingRoute)
  .use("/api/order", orderRoute)
  .use("/api/about", aboutRoute)
  .use("/api/contactus", contactUsRoute)
  .use("/api/commitment", commitmentRoute)
  .use("/api/partner", partnerRoute)
  .use("/api/message", contactMsgRoute)
  .use("/api/consultancy", consultancyRoute)
  .use("/api/quote", quoteRoute)
  .use("/api/warehouse", warehouseRoute)
  .use("/api/participant", participantRoute)
  .use("/api/notification", verifyToken, notificationRoute);

io.on(NOTIFY_EVENT.connection, (socket) => {
  // console.log('Connected to a user successfully.')

  socket.on(NOTIFY_EVENT.disconnect, () => {
    handleDisconnect(socket);
  });

  socket.on(NOTIFY_EVENT.addSession, (userId) => {
    SOCKET_SESSIONS.push({ socketId: socket.id, userId });
  });

  socket.on(NOTIFY_EVENT.send, (userId, data) => {
    sendNotify(io, userId, data);
  });
});

app.listen(PORT, () => {
  console.log(`Server start at port: ${PORT}`);
});

setInterval(() => {
  clearTokenList(TOKEN_BLACKLIST);
}, 3600000);
