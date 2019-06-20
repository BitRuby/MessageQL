import User from "../../models/User";
import bcryptjs from "bcryptjs";

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
