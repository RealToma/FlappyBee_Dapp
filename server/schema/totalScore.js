const mongoose = require("mongoose");

const schemaTotalScore = new mongoose.Schema({
  addressWallet: {
    type: String,
    require: true,
  },
  totalScore: {
    type: Number,
    require: true,
  },
  flagClaimed: {
    type: String,
    default: false,
    require: true,
  },
  timeClaimed: {
    type: String,
    require: true,
  },
});

const modelTotalScore = mongoose.model("total_scores", schemaTotalScore);
const modelStagingTotalScore = mongoose.model(
  "staging_total_scores",
  schemaTotalScore
);

module.exports = {
  modelTotalScore: modelTotalScore,
  modelStagingTotalScore: modelStagingTotalScore,
};
