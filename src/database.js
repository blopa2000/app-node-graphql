const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected to ", db.connection.host))
  .catch((err) => console.log("error db "));
