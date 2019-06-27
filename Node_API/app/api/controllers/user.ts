import { Handler } from "express";
import { Types } from "mongoose";
import User from "../models/User";

export class UserControllers {
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
