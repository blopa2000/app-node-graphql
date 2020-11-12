import express from "express";
import { makeExecutableSchema } from "graphql-tools";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./graphql/resolvers";
import morgan from "morgan";
import cors from "cors";
import { readFileSync } from "fs";
import { join } from "path";

import connect from "./database";

const app = express();
connect();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const typeDefs = readFileSync(join(__dirname, "graphql", "schema.gql"), "utf-8");

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
      messageId: "test",
    },
  })
);

app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
