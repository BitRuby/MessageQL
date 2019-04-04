import express from "express";

export class App {

  public app = express();

  constructor() {
    this.configure();
  }

  private configure() {
    this.app.get("/", (req, res) => {
      res.send("Hello World")
    })
  }

}
