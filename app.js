const express = require("express");
// require("dotenv").config();
const app = express();

app.use(express.json());

// routes 
const variant = require('./routes/variants');

// router middleware
app.use("/api/v1", variant);

module.exports = app;