import { NOTIFY_EVENT } from "../constant.js"
import { SOCKET_SESSIONS } from "../index.js"

export const sendNotify = (io, userId, message) => {
    SOCKET_SESSIONS.forEach(val => {
        if (val.userId == userId) {
            console.log(val.socketId)
            io.to(val.socketId).emit(NOTIFY_EVENT.receive, message)
        }
    })
}