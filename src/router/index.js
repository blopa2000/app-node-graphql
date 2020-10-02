const router = require("express").Router();

const users = require("../models/user");

router.get("/", async (req, res) => {
  const user = await users.find();
  res.json(user);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const newUser = new users({
    name,
    email,
  });
  newUser.save();
  res.json("user seve");
});

module.exports = router;
