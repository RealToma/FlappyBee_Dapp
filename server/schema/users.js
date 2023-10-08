const mongoose = require("mongoose");

const schemaUsers = new mongoose.Schema({
  adressEmail: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    require: true,
  },
  usernameX: {
    type: String,
    require: true,
  },
  urlXPostSharing: {
    type: String,
    require: true,
  },
  numberXFollowers: {
    type: String,
    require: true,
  },
  addressWallet: {
    type: String,
    require: true,
  },
  flagRules: {
    type: String,
    require: true,
  },
  flagVerified: {
    type: String,
    require: true,
  },
  timeSubmittedForm: {
    type: String,
    require: true,
  },
});

const modelUsers = mongoose.model("users", schemaUsers);

module.exports = {
  modelUsers: modelUsers,
};
