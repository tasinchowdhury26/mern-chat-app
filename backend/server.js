const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to accept JSON data from the frontend
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
