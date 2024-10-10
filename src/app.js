const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "divs",
    lastName: "gupta",
    email: "abc@gmail.com",
    password: "sush@123",
  });

  await user.save();
  return res.send("We Created a User");
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body.data;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true, //this is req because by default mongose doesnt run validators while updating the doc
      //only while inserting it runs the validators
    });
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});
connectDB()
  .then(() => {
    console.log("Unbelievable");
    app.listen(3000, () => {
      console.log("Listening");
    });
  })
  .catch((err) => {
    console.log("Nahi yrr data base hi connect nahi hua!!");
  });
