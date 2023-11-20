
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


const bankdataController = require("./controllers/bankdataController");
app.use("/bankdata", bankdataController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});



module.exports = app