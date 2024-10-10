const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    about: {
      type: String,
      default: "Write Something Amazing about you!!",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true, //Beautifull thing automatically adds createdAt and updatedAt fields and also updates the updatedAt field
  }
);

module.exports = mongoose.model("User", userSchema);
