import { Handler } from "express";
import { Types } from "mongoose";
import User from "../models/User";
const csv = require("csvtojson");

const path = "db.csv";

export class UserControllers {
  insert(): Handler {
    return async (req, res, next) => {
      try {
        const file = await csv().fromFile(path);
        const insertMany = await User.insertMany(file);
        res.status(200).json({
          message: "Handling post requests to /user/insert",
          result: insertMany
        });
      } catch (error) {
        res.status(500).json({
          error: error
        });
      }
    };
  }
  update(): Handler {
    return async (req, res, next) => {
      try {
        const updateMany = await User.updateMany(
          {},
          { $set: { username: "usee" } }
        );
        res.status(200).json({
          message: "Handling patch requests to /user/update",
          result: updateMany
        });
      } catch (error) {
        res.status(500).json({
          error: error
        });
      }
    };
  }
  delete(): Handler {
    return async (req, res, next) => {
      try {
        const deleteMany = await User.deleteMany({});
        res.status(200).json({
          message: "Handling delete requests to /user/delete",
          result: deleteMany
        });
      } catch (error) {
        res.status(500).json({
          error: error
        });
      }
    };
  }
  public usersNumber(): Handler {
    return async (req, res, next) => {
      const limit = parseInt(req.params.limit);
      try {
        const findLimit = await User.find({}).limit(limit);
        res.status(200).json({
          message: "Handling GET requests to /user/all/:limit",
          result: findLimit
        });
      } catch (error) {
        res.status(500).json({
          error: error
        });
      }
    };
  }
}
