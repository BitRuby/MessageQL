import { Handler } from "express";
import { Types } from "mongoose";
import User from "../models/User";

export class UserControllers {
  public users(): Handler {
    return async (req, res, next) => {
      try {
        const id = req.params.id;
        const findById = await User.findById(id);
        res.status(200).json({
          message: "Handling GET requests to /user/:id",
          result: findById
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
  public create(): Handler {
    return async (req, res, next) => {
      try {
        const user = new User({
          _id: new Types.ObjectId(),
          username: req.body.username,
          password: req.body.password
        });
        const userSave = await user.save();
        res.status(200).json({
          message: "Handling POST requests to /user/create",
          result: userSave
        });
      } catch (error) {
        res.status(500).json({
          error: error
        });
      }
    };
  }
}
