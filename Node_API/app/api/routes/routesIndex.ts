import express from "express";
import { MessageRoutes } from "./message";
import { UserRoutes } from "./user";
import { ConversationRoutes } from "./conversation";

export class RoutesIndex {
  private messageRoutes = new MessageRoutes();
  private userRoutes = new UserRoutes();
  private conversationRoutes = new ConversationRoutes();
  constructor(app: express.Application) {
    app.use("/message", this.messageRoutes.getAppRoutes());
    app.use("/user", this.userRoutes.getAppRoutes());
    app.use("/conversation", this.conversationRoutes.getAppRoutes());
  }
}
