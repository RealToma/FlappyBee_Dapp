require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const API_PORT = process.env.REACT_APP_PORT_API;
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const cors = require("cors");

const config = require("./config/key");
const controllerScore = require("./controller/score");
const controllerAuth = require("./controller/auth");
const controllerFreeMint = require("./controller/freeMint");
// const { claimRewardTokens } = require("./function/claimToken");
// const { coverSheetToDatabase } = require("./function/sheet");
const { handleCatchStakedEvent } = require("./function/contract");

// connects our back end code with the database
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

let db = mongoose.connection;

db.once("open", () => console.log("MongoDB connected"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

handleCatchStakedEvent();

app.use(cors());
// claimRewardTokens();
// coverSheetToDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/score", controllerScore);
app.use("/api/auth", controllerAuth);
app.use("/api/free_mint", controllerFreeMint);

// launch our backend into a port

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

io.on("connection", (socket) => {
  console.log("new client connected");
  socket.emit("connection", null);
});
