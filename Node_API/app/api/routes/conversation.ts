import express from "express";
import { ConversationControllers } from "../controllers/conversation";

export class ConversationRoutes {
  public router = express.Router();
  private convContr = new ConversationControllers();

  public getAppRoutes(): express.Router {
    this.router.post("/create", this.convContr.create());
    this.router.post("/join", this.convContr.join());
    this.router.post("/leave", this.convContr.leave());
    this.router.get("/:id", this.convContr.conversation());
    return this.router;
  }
}
