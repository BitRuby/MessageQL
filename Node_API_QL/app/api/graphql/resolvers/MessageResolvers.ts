import Message from "../../models/Message";
import User from "../../models/User";

export module MessageResolvers {
  export function messages(args: any) {
    if (!args._id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid identificator format.");
    }
    return Message.find({ convId: args._id })
      .then(result => {
        if (result.length < 1) {
          throw new Error("No messages in conversation.");
        }
        return result.map(conversation => {
          return conversation;
        });
      })
      .catch(err => {
        throw err;
      });
  }
  export function createMessage(args: any) {
    return User.findOne({ _id: "5cb35d264f4d2437d85fa181" })
      .then(user => {
        if (!user) {
          throw new Error("Cannot find user with specified identifier.");
        } else {
          const message = new Message({
            content: args.content,
            date: new Date().toISOString(),
            userId: user._id,
            convId: args.convId
          });
          return message.save();
        }
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        throw err;
      });
  }
}
