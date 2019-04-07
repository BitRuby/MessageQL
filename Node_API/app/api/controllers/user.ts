import { Handler } from "express";
import { Types } from "mongoose";
import User from "../models/User";

export class UserControllers {
  public getById(): Handler {
    return (req, res, next) => {
      const id = req.params.id;
      User.findById(id)
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json({
            message: "Handling GET requests to /user/:id",
            result: result
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            error: error
          });
        });
    };
  }
  public drop(): Handler {
    return (req, res, next) => {
      User.deleteMany({})
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json({
            message: "Handling DELETE requests to /user/drop",
            result: result
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            error: error
          });
        });
    };
  }
  public add(): Handler {
    return (req, res, next) => {
      const user = new User({
        _id: new Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
      });
      user
        .save()
        .then(result => {
          res.status(201).json({
            message: "Handling POST requests to /user/add",
            result: result
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            error: error
          });
        });
    };
  }
}
