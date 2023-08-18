const mongoose = require("mongoose");

const schemaTime = new mongoose.Schema({
  timeLockTreasure: {
    type: String,
    require: true,
  },
  timeLockMintOutfit: {
    type: String,
    require: true,
  },
});

const Time = mongoose.model("times", schemaTime);

module.exports = Time;
