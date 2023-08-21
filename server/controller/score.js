const express = require("express");
const router = express.Router();

router.post("/set_score", async (req, res) => {
  console.log(req.body);
  return res.json({
    flagSuccess: false,
  });
});

module.exports = router;
