import { Handler } from "express";
import Conversation from "../models/Conversation";
import User from "../models/User";
export class ConversationControllers {
  conversation(): Handler {
    return async (req, res, next) => {
      try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(405).json({
            message: "Handling GET requests to /conversation/:id",
            error: "Invalid identifier"
          });
        }
        const conversation = await Conversation.find({
          userIdArray: req.params.id
        });
        res.status(200).json({
          message: "Handling GET requests to /conversation/:id",
          result: conversation
        });
      } catch (err) {
        res.status(500).json({
          error: err
        });
      }
    };
  }
  leave(): Handler {
    return async (req, res, next) => {
      try {
        const findById = await Conversation.findById(req.body.id);
        if (!findById) {
          return res.status(405).json({
            message: "Handling POST requests to /conversation/leave",
            error: "Cannot find conversation with specified identifier"
          });
        }
        let el: number;
        if (
          (el = findById.userIdArray.indexOf("5cbf14e0392bce152ce173df")) !== -1
        ) {
          findById.userIdArray.splice(el, 1);
          findById.save();
          res.status(200).json({
            message: "Handling POST requests to /conversation/leave",
            result: findById
          });
        }
      } catch (err) {
        res.status(500).json({
          error: err
        });
      }
    };
  }
  join(): Handler {
    return async (req, res, next) => {
      try {
        const findById = await Conversation.findById(req.body.id);

        if (!findById) {
          return res.status(405).json({
            message: "Handling POST requests to /conversation/join",
            error: "Cannot find conversation with specified identifier"
          });
        }
        if (findById.userIdArray.indexOf("5cbf14e0392bce152ce173df") === -1) {
          findById.userIdArray.push("5cbf14e0392bce152ce173df");
          findById.save();
          res.status(200).json({
            message: "Handling POST requests to /conversation/join",
            result: findById
          });
        } else {
          return res.status(405).json({
            message: "Handling POST requests to /conversation/join",
            error: "User already joined"
          });
        }
      } catch (err) {
        res.status(500).json({
          error: err
        });
      }
    };
  }
  create(): Handler {
    return async (req, res, next) => {
      try {
        const findOne = await User.findOne({ _id: "5cbf14e0392bce152ce173df" });
        if (!findOne) {
          return res.status(405).json({
            message: "Handling POST requests to /conversation/create",
            error: "Cannot find user with specified identifier"
          });
        } else {
          const conv = new Conversation({
            creator: findOne._id,
            userIdArray: new Array(findOne._id)
          });
          const save = await conv.save();
          res.status(200).json({
            message: "Handling POST requests to /conversation/create",
            result: save
          });
        }
      } catch (err) {
        res.status(500).json({
          error: err
        });
      }
    };
  }
}
