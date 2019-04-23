import express from "express";
import GraphQLHTTP from "express-graphql";
import bodyParser from "body-parser";
import { Database } from "./api/config/db";
import User from "./api/models/User";
import bcryptjs from "bcryptjs";
import Message from "./api/models/Message";
import Conversation from "./api/models/Conversation";
import { graphqlSchema } from "./api/graphql/schema";


export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.configure();
  }

  private configure() {
    const db: Database = new Database();
    db.connect();
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
    this.app.use(bodyParser.json());
    this.app.use(
      "/graphql",
      GraphQLHTTP({
        schema: graphqlSchema,
        // rootValue: {
        //   users: () => {
        //     return User.find()
        //       .then(result => {
        //         return result.map(user => {
        //           return user;
        //         });
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   },
        //   conversations: (args: any) => {
        //     if (!args.userInput._id.match(/^[0-9a-fA-F]{24}$/)) {
        //       throw new Error("Invalid identificator format.");
        //     }
        //     return Conversation.find({ userIdArray: args.userInput._id })
        //       .then(result => {
        //         if (result.length < 1) {
        //           throw new Error("No conversations for specified user.");
        //         }
        //         return result.map(conversation => {
        //           return conversation;
        //         });
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   },
        //   messages: (args: any) => {
        //     if (!args.conversationInput._id.match(/^[0-9a-fA-F]{24}$/)) {
        //       throw new Error("Invalid identificator format.");
        //     }
        //     return Message.find({ convId: args.conversationInput._id })
        //       .then(result => {
        //         if (result.length < 1) {
        //           throw new Error("No messages in conversation.");
        //         }
        //         return result.map(conversation => {
        //           return conversation;
        //         });
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   },
        //   createUser: (args: any) => {
        //     return User.findOne({ username: args.userInput.username })
        //       .then(user => {
        //         if (user) {
        //           throw new Error("User already exist");
        //         } else {
        //           return bcryptjs.hash(args.userInput.password, 12);
        //         }
        //       })
        //       .then(hashPass => {
        //         const user = new User({
        //           username: args.userInput.username,
        //           password: hashPass
        //         });
        //         return user.save();
        //       })
        //       .then(result => {
        //         return result;
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   },
        //   newConversation: () => {
        //     return User.findOne({ _id: "5cb35d264f4d2437d85fa181" })
        //       .then(user => {
        //         if (!user) {
        //           throw new Error(
        //             "Cannot find user with specified identifier."
        //           );
        //         } else {
        //           const conversation = new Conversation({
        //             creator: user._id,
        //             userIdArray: new Array(user._id)
        //           });
        //           return conversation.save();
        //         }
        //       })
        //       .then(conversation => {
        //         return conversation;
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   },
        //   joinConversation: (args: any) => {
        //     return User.findOne({ _id: "5cb35d264f4d2437d85fa181" })
        //       .then(user => {
        //         if (!user) {
        //           throw new Error(
        //             "Cannot find user with specified identifier."
        //           );
        //         } else {
        //           return Conversation.findById(args.conversationInput._id);
        //         }
        //       })
        //       .then(conversation => {
        //         if (!conversation) {
        //           throw new Error(
        //             "Cannot find conversation with specified identifier"
        //           );
        //         } else {
        //           if (
        //             conversation.userIdArray.indexOf(
        //               "5cb35d264f4d2437d85fa181"
        //             ) === -1
        //           ) {
        //             conversation.userIdArray.push("5cb35d264f4d2437d85fa181");
        //           } else {
        //             throw new Error("User already joined");
        //           }
        //         }
        //       })
        //       .catch(err => {
        //         return err;
        //       });
        //   },
        //   leaveConversation: (args: any) => {
        //     return User.findOne({ _id: "5cb35d264f4d2437d85fa181" })
        //       .then(user => {
        //         if (!user) {
        //           throw new Error(
        //             "Cannot find user with specified identifier."
        //           );
        //         } else {
        //           return Conversation.findById(args.conversationInput._id);
        //         }
        //       })
        //       .then(conversation => {
        //         if (!conversation) {
        //           throw new Error(
        //             "Cannot find conversation with specified identifier"
        //           );
        //         } else {
        //           let el: number;
        //           if (
        //             (el = conversation.userIdArray.indexOf(
        //               "5cb35d264f4d2437d85fa181"
        //             )) === -1
        //           ) {
        //             throw new Error("User already leaved");
        //           } else {
        //             conversation.userIdArray.splice(el, 1);
        //           }
        //         }
        //       })
        //       .catch(err => {
        //         return err;
        //       });
        //   },
        //   createMessage: (args: any) => {
        //     return User.findOne({ _id: "5cb35d264f4d2437d85fa181" })
        //       .then(user => {
        //         if (!user) {
        //           throw new Error(
        //             "Cannot find user with specified identifier."
        //           );
        //         } else {
        //           const message = new Message({
        //             content: args.messageInput.content,
        //             date: new Date().toISOString(),
        //             userId: user._id,
        //             convId: args.messageInput.convId
        //           });
        //           return message.save();
        //         }
        //       })
        //       .then(result => {
        //         return result;
        //       })
        //       .catch(err => {
        //         throw err;
        //       });
        //   }
        // },
        graphiql: true
      })
    );
  }
}
