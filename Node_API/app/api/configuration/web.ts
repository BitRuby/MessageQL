import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

export class Web {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    app.use(morgan("dev"));
  }

  public bodyParser() {
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
    this.app.use(bodyParser.json());
  }

  public activateCors() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authorization"
      );
      if (req.method === "OPTIONS") {
        res.header(
          "Access-Control-Allow-Methods",
          "PUT, POST, PATH, DELETE, GET"
        );
        return res.status(200).json({});
      }
      next();
    });
  }
}
