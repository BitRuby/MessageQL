import mongoose from "mongoose";
import data from "./db.config.json";

export class Database {

  public connect() {
    mongoose
      .connect(
        `mongodb://${data.Username}:${
          data.Password
        }@ds135726.mlab.com:35726/node_api_ql`,
        {
          useNewUrlParser: true
        }
      )
      .then(success => {
        console.log("Connect to database success");
      })
      .catch(error => {
        console.log("Cannot connect to Database! " + error);
      });
  }

  public disconnect() {
    mongoose.connection.close();
  }
}
