const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./database");

const router = require("./router/index");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
