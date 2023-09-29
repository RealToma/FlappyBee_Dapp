const express = require("express");
const router = express.Router();
const { modelScore } = require("../schema/score");

router.post("/check_white_list", async (req, res) => {
    console.log("wallet address:", req.body.addressWallet)
});


module.exports = router;
