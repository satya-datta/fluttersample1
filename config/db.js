const mongoose = require("mongoose");
require('dotenv').config();
const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/ksd3";
const connection = mongoose.createConnection(dbUri);

connection.on("open", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

module.exports = connection;
