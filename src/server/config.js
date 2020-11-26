import { json } from "express";
import { makeExecutableSchema } from "graphql-tools";
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import { join } from "path";
import resolvers from "../graphql/resolvers";
import morgan from "morgan";
import cors from "cors";

//models
import Courses from "../models/courses";
import Teachers from "../models/teachers";

export default (app) => {
  app.set("port", process.env.PORT || 4000);
  app.use(morgan("dev"));
  app.use(cors());
  app.use(json());

  //GraphQL
  const typeDefs = readFileSync(join(__dirname, "../graphql", "schema.gql"), "utf-8");

  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
      context: {
        models: {
          Courses,
          Teachers,
        },
      },
    })
  );

  return app;
};
