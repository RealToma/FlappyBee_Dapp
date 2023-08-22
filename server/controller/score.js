const express = require("express");
const router = express.Router();
const { modelScore } = require("../schema/score");

router.post("/set_score", async (req, res) => {
  console.log(new Date().toLocaleString());
  const newScore = new modelScore({
    addressWallet: req.body.addressWallet,
    score: req.body.score,
    timePlayed: new Date().toLocaleString(),
  });

  try {
    await newScore.save();
  } catch (error) {
    console.log(error);
    return res.json({
      flagSuccess: false,
      msgError: error,
    });
  }
});

router.get("/get_all_scores", async (req, res) => {
  try {
    const dataScores = await modelScore.find();
    return res.json({
      flagSuccess: true,
      dataScores: dataScores,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      flagSuccess: false,
      msgError: error,
    });
  }
});

module.exports = router;
