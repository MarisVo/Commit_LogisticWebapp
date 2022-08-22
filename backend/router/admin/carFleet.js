import express from "express";
import {
  sendError,
  sendServerError,
  sendSuccess,
} from "../../helper/client.js";
import CarFleet from "../../model/CarFleet.js";
import { carFleetValidate } from "../../validation/carFleet.js";
import Car from "../../model/Car.js";
import Bill from "../../model/Bill.js";

const carFleetAdminRoute = express.Router();

/**
 * @route POST /api/admin/carFleet/:carId
 * @description register new carFleet
 * @access private
 */
carFleetAdminRoute.post("/:carId", async (req, res) => {
  const errors = carFleetValidate(req.body);
  if (errors) return sendError(res, errors);

  let { name, director } = req.body;

  try {
    const carFleet = await CarFleet.create({
      name,
      director,
    });

    const car = await Car.exists({
      _id: req.params.carId,
    });
    if (car) {
      await Car.updateOne(
        {
          _id: car._id,
        },
        {
          $push: { car_fleet: carFleet },
        }
      );
      return sendSuccess(res, "Added carFleet in car file successfully");
    }
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
  return sendSuccess(res, "CarFleet registered successfully.");
});

/**
 * @route PUT /api/admin/admin/carFleet/:id
 * @description update details of an existing carFleet
 * @access private
 */
carFleetAdminRoute.put("/:id", async (req, res) => {
  const { id } = req.params;
  const errors = carFleetValidate(req.body);
  if (errors) return sendError(res, errors);
  let { name, director } = req.body;
  try {
    const carFleet = await CarFleet.exists({ id });
    if (carFleet) {
      await CarFleet.findByIdAndUpdate(id, {
        name: name,
        director: director,
      });
      return sendSuccess(res, "Update carFleet successfully.", {
        name: name,
        director: director,
      });
    }
    return sendError(res, "CarFleet does not exist.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route DELETE /api/admin/admin/carFleet/:id
 * @description delete an existing carFleet
 * @access private
 */
carFleetAdminRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await CarFleet.exists({ _id: id });
    if (!isExist) return sendError(res, "CarFleet does not exist.");
    await Car.updateOne({ car_fleet: id }, { $pull: { car_fleet: id } });
    const carFleet = await CarFleet.findByIdAndRemove(id);
    return sendSuccess(res, "Delete carFleet successfully.", carFleet);
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/admin/carFleet/car/:carFleetId
 * @description get a single car turnover information
 * @access public
 */

carFleetAdminRoute.get("/car/:carFleetId", async (req, res) => {
  const { plate } = req.query;
  const { carFleetId } = req.params;
  try {
    const carFleet = await CarFleet.findById(carFleetId);
    if (!carFleet) return sendError(res, "carFleet does not exist.");
    const car = await Car.find({ plate: plate });
    if (!car) return sendError(res, "car does not exist.");
    const bill = await Bill.find({ car: car  });
    console.log(bill)
    if (!bill) return sendError(res, "Bill does not exist.");
    var turnover = 0;
    if (bill[0].product_shipments.length) {
      for (let i = 0; i < bill[0].product_shipments.length; i++) { 
        turnover += bill[0].product_shipments[i].turnover;
      }
    } 
    if (turnover)
      return sendSuccess(
        res,
        "get car turnover information successfully.",
        {turnover,
        car
      }
      );
    return sendError(res, "car turnover information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

/**
 * @route GET /api/admin/carFleet/:carFleetId
 * @description get all cars in fleet turnover information
 * @access public
 */
carFleetAdminRoute.get("/:carFleetId", async (req, res) => {
  const { carFleetId } = req.params;
  try {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const { sortBy } = req.query;
    const carFleet = await CarFleet.findById(carFleetId).populate("bills");
    if (!carFleet) return sendError(res, "carFleet does not exist.");
    const cars = await Car.find({ car_fleet: carFleet })
      .limit(pageSize)
      .skip(pageSize * page)
      .sort(`${sortBy}`);
    var length = await Car.find({ car_fleet: carFleet }).count();
    if (!cars) return sendError(res, "car does not exist.");
    const bills = carFleet.bills;
    if (!bills) return sendError(res, "Bill does not exist.");
    var turnover = 0;
    for (let j = 0; j < bills.length; j++) {
      for (let i = 0; i < bills[j].product_shipments.length; i++) {
        if (bills[j].product_shipments.length) {
          turnover += bills[j].product_shipments[i].turnover;
        }
      }
    }
    if (turnover){
      return sendSuccess(
        res,
        "get cars turnover information successfully.",
        {
          length,
          turnover,
          cars
        }
      );
    }
    return sendError(res, "cars turnover information is not found.");
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
});

export default carFleetAdminRoute;
