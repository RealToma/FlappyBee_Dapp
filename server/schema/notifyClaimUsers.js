const mongoose = require("mongoose");

const schemaNotifyClaimUsers = new mongoose.Schema({
  addressWallet: {
    type: String,
    require: true,
  },
  addressEmail: {
    type: String,
    require: true,
  },
  timeSubmit: {
    type: String,
    require: true,
  },
});

const modelNotifyClaimUsers = mongoose.model(
  "notify_claim_users",
  schemaNotifyClaimUsers
);

module.exports = {
  modelNotifyClaimUsers: modelNotifyClaimUsers,
};
