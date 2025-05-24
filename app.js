const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./api/routes/Roter");

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/", Routes);

const mongooseLink = "mongodb+srv://Ali:Aa112233@cluster0.zjqnbu0.mongodb.net/";

mongoose.connect(mongooseLink);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
  // startCronLoopEvery24h();
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.get('/app', (req, res) => {
    res.status(200).json({
      batata:"red"
    });
});


module.exports = app;