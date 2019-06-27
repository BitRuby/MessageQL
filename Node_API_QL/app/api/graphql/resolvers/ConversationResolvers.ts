import Conversation from "../../models/Conversation";
import User from "../../models/User";
import Message from "../../models/Message";

export module ConversationResolvers {
  export function conversations(args: any) {
    if (!args._id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid identificator format.");
    }
    return Conversation.find({ userIdArray: args._id })
      .then(result => {
        if (result.length < 1) {
          throw new Error("No conversations for specified user.");
        }
        return result.map(conversation => {
          return conversation;
        });
      })
      .catch(err => {
        throw err;
      });
  }

  export function newConversation() {
    return User.findOne({ _id: "5d0beb0cbdf86b58d11e5261" })
      .then(user => {
        if (!user) {
          throw new Error("Cannot find user with specified identifier.");
        } else {
          const conv = new Conversation({
            creator: user._id,
            userIdArray: new Array(user._id)
          });
          return conv.save();
        }
      })
      .then(conv => {
        return conv;
      })
      .catch(err => {
        throw err;
      });
  }

  export function deleteConversation(args: any) {
    if (!args._id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error("Invalid identificator format.");
    }
    return Conversation.findOne({ _id: args._id })
      .then(conversation => {
        if (!conversation) {
          throw new Error(
            "Cannot find conversation with specified identifier."
          );
        } else {
          return conversation.remove();
        }
      })
      .then(conversations => {
        return Message.find({ convId: args._id }).remove();
      })
      .then(deletedMessages => {
        return deletedMessages.convId;
      })
      .catch(err => {
        throw err;
      });
  }

  export function joinConversation(args: any) {
    return User.findOne({ _id: "5d0beb0cbdf86b58d11e5261" })
      .then(user => {
        if (!user) {
          throw new Error("Cannot find user with specified identifier.");
        } else {
          return Conversation.findById(args._id);
        }
      })
      .then(conv => {
        if (!conv) {
          throw new Error("Cannot find conversation with specified identifier");
        } else {
          if (conv.userIdArray.indexOf("5d0beb0cbdf86b58d11e5261") === -1) {
            conv.userIdArray.push("5d0beb0cbdf86b58d11e5261");
            return conv.save();
          } else {
            throw new Error("User already joined");
          }
        }
      })
      .catch(err => {
        return err;
      });
  }

  export function leaveConversation(args: any) {
    return User.findOne({ _id: "5d0beb0cbdf86b58d11e5261" })
      .then(user => {
        if (!user) {
          throw new Error("Cannot find user with specified identifier.");
        } else {
          return Conversation.findById(args._id);
        }
      })
      .then(conv => {
        if (!conv) {
          throw new Error("Cannot find conversation with specified identifier");
        } else {
          let el: number;
          if (
            (el = conv.userIdArray.indexOf("5d0beb0cbdf86b58d11e5261")) === -1
          ) {
            throw new Error("User already leaved");
          } else {
            conv.userIdArray.splice(el, 1);
            return conv.save();
          }
        }
      })
      .catch(err => {
        return err;
      });
  }
}
