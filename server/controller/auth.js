const express = require("express");
const router = express.Router();
const { modelUsers } = require("../schema/users");

router.post("/check_white_list", async (req, res) => {
  const addressWallet = req.body.addressWallet;
  // console.log("wallet address:", req.body.addressWallet);
  try {
    let arrayAddressWallet = await modelUsers.find({
      addressWallet: addressWallet,
    });
    // console.log("arrayAddressWallet:", arrayAddressWallet);
    if (arrayAddressWallet.length !== 0) {
      return res.json({
        flagSuccess: true,
      });
    } else {
      return res.json({
        flagSuccess: false,
      });
    }
  } catch (error) {
    console.error("Error reading sheet content:", error);
    return res.json({
      flagSuccess: false,
    });
  }
});

module.exports = router;
