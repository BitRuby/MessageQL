import { Handler } from "express";
import Message from "../models/Message";
import Conversation from "../models/Conversation";
export class MessageControllers {
  create(): Handler {
    return async (req, res, next) => {
      try {
        if (!req.body.convId.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(405).json({
            error: "Invalid identifier"
          });
        }
        const conversation = await Conversation.findOne({
          _id: req.body.convId
        });
        if (!conversation) {
          return res.status(405).json({
            message: "Handling POST requests to /message/create",
            error: "Cannot find conversation with specified identifier"
          });
        }
        const message = new Message({
          content: req.body.content,
          date: new Date().toISOString(),
          userId: "5d0beaf1bdf86b58d11ccb43",
          convId: req.body.convId
        });
        const save = await message.save();
        if (save) {
          res.status(201).json({
            message: "Handling POST requests to /message/create",
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
  message(): Handler {
    return async (req, res, next) => {
      try {
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(405).json({
            error: "Invalid identifier"
          });
        }
        const find = await Message.find({ convId: req.params.id });
        res.status(200).json({
          message: "Handling GET requests to /message/:id",
          result: find
        });
      } catch (err) {
        res.status(500).json({
          error: err
        });
      }
    };
  }
}
