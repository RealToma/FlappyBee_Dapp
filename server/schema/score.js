const mongoose = require("mongoose");

const schemaScore = new mongoose.Schema({
  addressWallet: {
    type: String,
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
  timePlayed: {
    type: String,
    require: true,
  },
});

const modelScore = mongoose.model("scores", schemaScore);
const modelStagingScore = mongoose.model("staging_scores", schemaScore);

module.exports = {
  modelScore: modelScore,
  modelStagingScore: modelStagingScore,
};
