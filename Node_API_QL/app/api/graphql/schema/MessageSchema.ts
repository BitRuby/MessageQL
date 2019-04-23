import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} from "graphql";
import { MessageResolvers } from "../resolvers/MessageResolvers";

const messageType = new GraphQLObjectType({
  name: "Message",
  fields:{
    _id: {
      type: GraphQLID
    },
    date: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    convId: {
      type: GraphQLID
    },
    userID: {
      type: GraphQLID
    }
  }
});

const query = {
  messages: {
    type: new GraphQLList(messageType),
    args: {
      _id: {
        type: GraphQLID
      }
    },
    resolve: (obj: any, input: any) => MessageResolvers.messages(input)
  }
};

const mutation = {
  createMessage: {
    type: messageType,
    args: {
      content: {
        type: GraphQLString
      },
      convId: {
        type: GraphQLID
      }
    },
    resolve: (obj: any, input: any) => MessageResolvers.createMessage(input)
  }
};

export const MessageSchema = {
  query,
  mutation,
  type: [messageType]
};
