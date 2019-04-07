import express from "express";
import { MessageRoutes } from "../routes/message";
import { UserRoutes } from "../routes/user";



export class Routes {
    private messageRoutes = new MessageRoutes();
    private userRoutes = new UserRoutes();
    constructor(app: express.Application) {
        app.use('/message', this.messageRoutes.getAppRoutes());
        app.use('/user', this.userRoutes.getAppRoutes());
    }
}