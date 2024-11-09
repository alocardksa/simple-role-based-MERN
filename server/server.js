require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 500;
const connectDB = require("./database/db");
const app = express();

app.use(express.json());
app.use(cors());

// Database connection and server start
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit the application if DB connection fails
  });
