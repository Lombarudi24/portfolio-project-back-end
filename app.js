
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Welcome to E-banking App");
});




module.exports = app