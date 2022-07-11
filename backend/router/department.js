import express from "express";
import { sendError, sendServerError, sendSuccess } from "../helper/client.js";
import Department from "../model/Department.js";

const departmentRoute = express.Router();

// post ?? Department def: contains array of departments, can be created, called within department so no need to access in public get(?)

/**
 * @route GET /api/department/:id
 * @description get a single department information
 * @access public
 */

departmentRoute.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.exists({ _id: id });
    if (!department) return sendError(res, "Department does not exist.");

    if (department)
      return sendSuccess(
        res,
        "get department information successfully.",
        department
      );
    return sendError(res, "department information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/department
 * @description get department information
 * @access public
 */

departmentRoute.get("/", async (req, res) => {
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const department = await Department.find({})
      .limit(pageSize)
      .skip(pageSize * page);
    if (department)
      return sendSuccess(
        res,
        "get department information successfully.",
        department
      );
    return sendError(res, "department information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/department/search/:keyword
 * @description get department information by keyword
 * @access public
 */

departmentRoute.get("/search/:keyword", async (req, res) => {
  try {
    const { keyword } = req.params;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const department = await Department.find({ $in: [keyword] })
      .limit(pageSize)
      .skip(pageSize * page);
    if (department)
      return sendSuccess(
        res,
        "get department information successfully.",
        department
      );
    return sendError(res, "department information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

export default departmentRoute;
