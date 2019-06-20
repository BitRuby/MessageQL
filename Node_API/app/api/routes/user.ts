import express from "express";
import { UserControllers } from "../controllers/user";

export class UserRoutes {
  public router = express.Router();
  private usrContr = new UserControllers();

  public getAppRoutes(): express.Router {
    this.router.get("/one/:id", this.usrContr.users());
    this.router.get("/all/:limit", this.usrContr.usersNumber());
    this.router.post("/create", this.usrContr.create());
    return this.router;
  }
}
