import express from "express";
import {
  sendError,
  sendServerError,
  sendAutoMail,
  sendSuccess,
} from "../helper/client.js";
import { APPLICANT_STATUS } from "../constant.js";
import path from "path";
import { submitApplicantValidate } from "../validation/applicant.js";
import Applicant from "../model/Applicant.js";
import Contact from "../model/Contact.js";
import Career from "../model/Career.js";

import multer from "multer";
const uploadHandle = multer();

const applicantRoute = express.Router();

/**
 * @route POST /api/applicant
 * @description applicant submit
 * @access public
 */
applicantRoute.post("/", uploadHandle.single("file"), async (req, res) => {
  const errors = submitApplicantValidate(req.body);
  if (errors) return sendError(res, errors);
  let { firstName, lastName, phoneNumber, email, source, message, careerId } =
    req.body;
  const cv = req.file;
  const extension = path.extname(cv.originalname);
  const status = APPLICANT_STATUS.PENDING;
  try {
    const applicant = new Applicant({
      firstName,
      lastName,
      phoneNumber,
      email,
      source,
      message,
      status,
    });
    const contact = await Contact.findOne({});
    const options = {
      from: process.env.MAIL_HOST,
      to: process.env.MAIL_HOST,
      subject: applicant.lastName + "_CV",
      html: `<p>Job application CV</p>`,

      attachments: [
        {
          filename:
            applicant.firstName + applicant.lastName + "_CV" + extension,
          content: cv.buffer,
        },
      ],
    };
    const sendMailSuccess = await sendAutoMail(options);

    if (!sendMailSuccess) return sendError(res, "send CV failed.");
    const ret = await applicant.save();
    const career =/* await */ Career.findByIdAndUpdate(careerId, {
      $push: { applicants: { applicant } },
    });
    if (career)
      return sendSuccess(res, "Added applicant in career successfully");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/applicant/:id
 * @description get applicant status information
 * @access public
 */
applicantRoute.get("/", async (req, res) => {
  const { id } = req.params;
  try {
    const applicant = await Applicant.exists({ _id: id });
    if (!applicant) return sendError(res, "Applicant not exists.");
    if (applicant)
      return sendSuccess(
        res,
        "get applicant information successfully.",
        Applicant.status
      );
    return sendError(res, "applicant information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

export default applicantRoute;
