import User from "../../models/User";
import bcryptjs from "bcryptjs";
const csv = require("csvtojson");

const path = "db.csv";

export module UserResolvers {
  export function users(args: any) {
    console.log(args);
    return User.find()
      .limit(args.limit)
      .then(result => {
        return result.map(user => {
          return user;
        });
      })
      .catch(err => {
        throw err;
      });
  }
  export function update() {
    return User.updateMany({}, { $set: { username: "usee" } })
      .then(update => {
        return update.map((map: any) => {
          return map;
        });
      })
      .catch(error => {
        throw error;
      });
  }
  export function deleted() {
    return User.deleteMany({})
      .then(update => {
        return update;
      })
      .catch(error => {
        throw error;
      });
  }
  export function insert() {
    return csv()
      .fromFile(path)
      .then((update: any) => {
        return User.insertMany(update);
      })
      .then((result: any) => {
        return result.map((map: any) => {
          return map;
        });
      });
  }
  export function createUser(args: any) {
    return User.findOne({ username: args.username })
      .then(user => {
        if (user) {
          throw new Error("User already exist");
        } else {
          return bcryptjs.hash(args.password, 12);
        }
      })
      .then(hashPass => {
        const user = new User({
          username: args.username,
          password: hashPass
        });
        return user.save();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }
}
