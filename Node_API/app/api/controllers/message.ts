import { Handler } from "express";
import Message from "../models/Message";

export class MessageControllers {

  public getMessage(): Handler {

    return (req, res, next) => {
      res.send("the message is here");
    };
  }

}
