const mongoose = require("mongoose");

const schemaStakedLogs = new mongoose.Schema({
  adressWallet: {
    type: String,
    require: true,
  },
  countFreeMint: {
    type: Number,
    require: true,
  },
  dateJoined: {
    type: String,
    require: true,
  },
  flagVerified: {
    type: String,
    require: true,
  },
});

const modelStakedLogs = mongoose.model("log_stake_lists", schemaStakedLogs);

module.exports = {
  modelStakedLogs: modelStakedLogs,
};
