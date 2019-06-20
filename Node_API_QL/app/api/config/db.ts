import mongoose from "mongoose";
import data from "./db.config.json";

export class Database {
  public connect() {
    mongoose
      .connect(`mongodb://localhost:27017/Node_API_QL`, {
        useNewUrlParser: true
      })
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
