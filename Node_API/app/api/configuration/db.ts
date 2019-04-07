import mongoose from "mongoose";
import data from "./db.config.json";

export class Database {

  public connect() {
    mongoose
      .connect(
        `mongodb://${data.Username}:${
          data.Password
        }@ds231956.mlab.com:31956/messageql`,
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
