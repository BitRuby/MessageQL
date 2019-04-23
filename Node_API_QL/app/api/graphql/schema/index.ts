import { UserSchema } from "./UserSchema";
import { MessageSchema } from "./MessageSchema";
import { ConversationSchema } from "./ConversationSchema";
import { GraphQLSchema, GraphQLObjectType } from "graphql";

export const graphqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () =>
      Object.assign(
        UserSchema.query,
        MessageSchema.query,
        ConversationSchema.query
      )
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: () =>
      Object.assign(
        ConversationSchema.mutation,
        MessageSchema.mutation,
        UserSchema.mutation
      )
  }),
  types: [...UserSchema.type, ...MessageSchema.type, ...ConversationSchema.type]
});
