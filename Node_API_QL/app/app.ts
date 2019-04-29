import express from "express";
import GraphQLHTTP from "express-graphql";
import bodyParser from "body-parser";
import { Database } from "./api/config/db";

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
        graphiql: true
      })
    );
  }
}
