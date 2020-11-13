import express from "express";
import config from "./server/config";
import connect from "./database";

const app = config(express());

connect();

app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
