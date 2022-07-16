import express from "express";
import {
  sendError,
  sendServerError,
  sendSuccess,
} from "../../helper/client.js";
import { updateStatusValidate } from "../../validation/applicant.js";
import Applicant from "../../model/Applicant.js";
import Career from "../../model/Career.js";

const applicantAdminRoute = express.Router();

/**
 * @route PUT /api/admin/applicant/:id
 * @description update status of an existing applicant
 * @access private
 */
applicantAdminRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const errors = updateStatusValidate(req.body);
  if (errors) return sendError(res, errors);
  try {
    const applicant = await Applicant.findById(id);
    if (applicant) {
      await Applicant.findByIdAndUpdate(id, { status: status });
      return sendSuccess(res, "Update applicant successfully.", {
        status: status,
      });
    }
    return sendError(res, "Applicant does not exist.");
  } catch (error) {
    console.log(error);
    return sendError(res);
  }
});

/**
 * @route GET /api/admin/applicant
 * @description get applicant information
 * @access private
 */
applicantAdminRoute.get("/", async (req, res) => {
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const { keyword, sortBy, location, state } = req.query;
    var keywordCondition = keyword
      ? {
          $or: [
            { firstName: { $regex: keyword, $options: "i" } },
            { lastName: { $regex: keyword, $options: "i" } },
            { phoneNumber: { $regex: keyword, $options: "i" } },
            { email: { $regex: keyword, $options: "i" } },
            { source: { $regex: keyword, $options: "i" } },
            { message: { $regex: keyword, $options: "i" } },
            { status: { $regex: keyword, $options: "i" } },
          ],
        }
      : {};
    var query = {};
      if (location) {
        query.location = location;
      }
      if (state) {
        query.state = state;
      }
    const applicant = await Applicant.find({ $and: [query, keywordCondition] })
      .limit(pageSize)
      .skip(pageSize * page)
      .sort(`${sortBy}`);
    if (applicant)
      return sendSuccess(
        res,
        "Get applicant information successfully.",
        applicant
      );
    return sendError(res, "Applicant information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route DELETE /api/admin/applicant/:id
 * @description delete an existing applicant
 * @access private
 */
applicantAdminRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Applicant.exists({ _id: id });
    if (!isExist) return sendError(res, "Applicant does not exist.");
    await Career.updateOne({}, { $pull: { applicants: id } });
    await Applicant.findByIdAndRemove(id)
      .then(() => {
        return sendSuccess(res, "Delete applicant successfully.");
      })
      .catch((err) => {
        return sendError(res, err);
      });
  } catch (error) {
    console.log(error);
    return sendError(res);
  }
});

/**
 * @route GET /api/admin/applicant/search/:keyword
 * @description get applicant information by keyword
 * @access public
 */

applicantAdminRoute.get("/search/:keyword", async (req, res) => {
  try {
    const { keyword } = req.params;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const applicant = await Applicant.find({ $in: [keyword] })
      .limit(pageSize)
      .skip(pageSize * page);
    if (applicant)
      return sendSuccess(
        res,
        "get applicant information successfully.",
        applicant
      );
    return sendError(res, "applicant information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/admin/applicant/filter
 * @description filter applicant information
 * @access public
 */

applicantAdminRoute.get("/filter", async (req, res) => {
  try {
    const { department, type, location, state } = req.query;

    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const applicant = await Applicant.find({
      $or: [
        { department: department },
        { type: type },
        { location: location },
        { state: state },
      ],
    })
      .limit(pageSize)
      .skip(pageSize * page);
    if (applicant)
      return sendSuccess(
        res,
        "get applicant information successfully.",
        applicant
      );
    return sendError(res, "applicant information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/admin/applicant/sort
 * @description sort applicant information
 * @access public
 */

applicantAdminRoute.get("/sort", async (req, res) => {
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const sortBy = req.query.sortBy;
    const applicant = await Applicant.find({})
      .limit(pageSize)
      .skip(pageSize * page)
      .sort(-sortBy);
    if (applicant)
      return sendSuccess(
        res,
        "get applicant information successfully.",
        applicant
      );
    return sendError(res, "applicant information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

export default applicantAdminRoute;
