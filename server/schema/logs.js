const mongoose = require("mongoose");

const schemaStakedLogs = new mongoose.Schema({
  adressWallet: {
    type: String,
    require: true,
  },
  amountStaked: {
    type: Number,
    require: true,
  },
  transactionHash: {
    type: String,
    require: true,
  },
  dateProcessed: {
    type: String,
    require: true,
  },
});

const modelStakedLogs = mongoose.model("log_stake_lists", schemaStakedLogs);

module.exports = {
  modelStakedLogs: modelStakedLogs,
};
