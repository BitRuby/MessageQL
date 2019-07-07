import express from "express";
import { UserControllers } from "../controllers/user";

export class UserRoutes {
  public router = express.Router();
  private usrContr = new UserControllers();

  public getAppRoutes(): express.Router {
    this.router.get("/all/:limit", this.usrContr.usersNumber());
    this.router.post("/insert", this.usrContr.insert());
    this.router.patch("/update", this.usrContr.update());
    this.router.delete("/delete", this.usrContr.delete());

    return this.router;
  }
}
