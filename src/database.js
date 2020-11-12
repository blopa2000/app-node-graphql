const mongoose = require("mongoose");

// .then((db) => console.log("db is connected to ", db.connection.host))
// .catch((err) => console.log("error db "));

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch {
    console.log("Something goes wrong");
  }
}
