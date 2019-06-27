import express from "express";
import { ConversationControllers } from "../controllers/conversation";

export class ConversationRoutes {
  public router = express.Router();
  private convContr = new ConversationControllers();

  public getAppRoutes(): express.Router {
    this.router.post("/create", this.convContr.create());
    this.router.delete("/:id", this.convContr.delete());
    return this.router;
  }
}
