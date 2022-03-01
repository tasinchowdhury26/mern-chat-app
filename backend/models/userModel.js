const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://yt3.ggpht.com/ytc/AKedOLTB8ePe7SCHOWWLshRKieofBSqKuVaxwaF5NiCs=s900-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
