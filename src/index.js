import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import morgan from "morgan";
import cors from "cors";

import connect from "./database";

import router from "./router/index";

const app = express();
connect();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

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
