const mongoose = require("mongoose");

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (err) {
    console.log("Something goes wrong: ", err);
  }
}
