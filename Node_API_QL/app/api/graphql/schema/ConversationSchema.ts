import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from "graphql";
import { ConversationResolvers } from "../resolvers/ConversationResolvers";

const conversationType = new GraphQLObjectType({
  name: "Conversation",
  fields: {
    _id: {
      type: GraphQLID
    },
    userIdArray: {
      type: new GraphQLList(GraphQLID)
    },
    creator: {
      type: GraphQLID
    }
  }
});

const query = {
  conversations: {
    type: new GraphQLList(conversationType),
    args: {
      _id: {
        type: GraphQLID
      }
    },
    resolve: (obj: any, input: any) =>
      ConversationResolvers.conversations(input)
  }
};

const mutation = {
  newConversation: {
    type: conversationType,
    resolve: () => ConversationResolvers.newConversation()
  },
  joinConversation: {
    type: conversationType,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: (obj: any, input: any) =>
      ConversationResolvers.joinConversation(input)
  },
  leaveConversation: {
    type: conversationType,
    args: {
      _id: {
        type: GraphQLString
      }
    },
    resolve: (obj: any, input: any) =>
      ConversationResolvers.leaveConversation(input)
  }
};

export const ConversationSchema = {
  query,
  mutation,
  type: [conversationType]
};
