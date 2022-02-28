const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
var db = mongoose.connection;
mongoose.connect(process.env.MongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

db.on("connecting", function () {
  console.log("connecting to MongoDB...");
})
  .on("error", function (error) {
    console.error("Error in MongoDb connection: " + error);
    mongoose.disconnect();
  })
  .on("connected", function () {
    console.log("MongoDB connected!");
  })
  .once("open", function () {
    console.log("MongoDB connection opened");
  })
  .on("reconnected", function () {
    console.log("MongoDB reconnected!");
  })
  .on("disconnected", function () {
    console.log("MongoDB disconnected!");
    mongoose.connect(process.env.MongoURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
