const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const User = require("../models/userModel");

const registerUser = asyncHandler(async () => {
  const { name, email, password, pic } = req.body;

  if (!name || !password || !email) {
    res.status(400);
    throw new Error(`Please enter all fields`);
  }

  const userExists = await User.findOne({ email });
});
