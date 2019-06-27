import { Handler } from "express";
import Conversation from "../models/Conversation";
import User from "../models/User";
import Message from "../models/Message";
export class ConversationControllers {
  delete(): Handler {
    return async (req, res, next) => {
      try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(405).json({
            message: "Handling DELETE requests to /conversation/:id",
            error: "Invalid identifier"
          });
        }
        const conversation = await Conversation.deleteOne({
          _id: req.params.id
        });
        const message = await Message.deleteMany({
          convId: req.params.id
        });
        res.status(200).json({
          message: "Handling DELETE requests to /conversation/:id",
          result: conversation
        });
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
        const findOne = await User.findOne({ _id: "5d0beaf1bdf86b58d11ccb43" });
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
