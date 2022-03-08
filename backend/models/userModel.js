const mongoose = require("mongoose");
const bcrypt = require("bcryptjs/dist/bcrypt");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://yt3.ggpht.com/ytc/AKedOLTB8ePe7SCHOWWLshRKieofBSqKuVaxwaF5NiCs=s900-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//before saving user to db, encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10); //higher the number, stronger the password
  this.password = await bcrypt.hash(this.password, salt); // hash the password with the generated salt
});

const User = mongoose.model("User", userSchema);

module.exports = User;
