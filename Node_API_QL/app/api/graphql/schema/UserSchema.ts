import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from "graphql";
import { UserResolvers } from "../resolvers/UserResolvers";

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    _id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  }
});

const query = {
  users: {
    type: new GraphQLList(userType),
    args: {
      limit: {
        type: GraphQLInt
      }
    },
    resolve: (obj: any, input: any) => UserResolvers.users(input)
  }
};

const mutation = {
  createUser: {
    type: new GraphQLList(userType),
    args: {
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    },
    resolve: (obj: any, input: any) => UserResolvers.createUser(input)
  },
  update: {
    type: new GraphQLList(userType),
    args: {},
    resolve: (obj: any, input: any) => UserResolvers.update()
  },
  delete: {
    type: userType,
    args: {},
    resolve: (obj: any, input: any) => UserResolvers.deleted()

  },
  insert: {
    type: new GraphQLList(userType),
    args: {},
    resolve: (obj: any, input: any) => UserResolvers.insert()
  }
};

export const UserSchema = {
  query,
  mutation,
  type: [userType]
};
