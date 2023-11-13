const mongoose = require("mongoose");

// const schemaUsers = new mongoose.Schema({
//   addressEmail: {
//     type: String,
//     require: true,
//   },
//   fullname: {
//     type: String,
//     require: true,
//   },
//   usernameX: {
//     type: String,
//     require: true,
//   },
//   urlXPostSharing: {
//     type: String,
//     require: true,
//   },
//   numberXFollowers: {
//     type: String,
//     require: true,
//   },
//   addressWallet: {
//     type: String,
//     require: true,
//   },
//   flagRules: {
//     type: String,
//     require: true,
//   },
//   flagVerified: {
//     type: String,
//     require: true,
//   },
//   timeSubmittedForm: {
//     type: String,
//     require: true,
//   },
//   countFreeMint: {
//     type: Number,
//     require: true,
//   },
// });

const schemaUsers = new mongoose.Schema({
  addressWallet: {
    type: String,
    require: true,
  },
  countP2EAvailable: {
    type: Number,
    require: true,
  },
  dateJoined: {
    type: String,
    require: true,
  },
  dateLastLoggedIn: {
    type: String,
    require: true,
  },
  flagPermission: {
    type: Boolean,
    require: true,
  },
});

const modelUsers = mongoose.model("users", schemaUsers);

// const modelP2EUsers = mongoose.model("p2e_users", schemaP2EUsers);
// const modelUsers = mongoose.model("users", schemaUsers);

module.exports = {
  modelUsers: modelUsers,
  // modelP2EUsers: modelP2EUsers,
};
