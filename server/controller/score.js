const express = require("express");
const router = express.Router();
const { modelScore } = require("../schema/score");
const { modelTotalScore } = require("../schema/totalScore");
const { modelUsers } = require("../schema/users");

router.post("/set_score", async (req, res) => {
  // console.log(new Date().toLocaleString());

  try {
    let newScore = new modelScore({
      addressWallet: req.body.addressWallet,
      score: req.body.score,
      timePlayed: new Date().toLocaleString(),
    });
    await newScore.save();

    let dataEachTotalScores = await modelTotalScore.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataEachTotalScores.length === 0) {
      let newTotalScore = new modelTotalScore({
        addressWallet: req.body.addressWallet,
        totalScore: req.body.score,
        flagClaimed: false,
        timeClaimed: "not_claimed",
      });
      await newTotalScore.save();
    } else {
      let totalScore = dataEachTotalScores[0].totalScore + req.body.score;
      await modelTotalScore.findOneAndUpdate(
        {
          addressWallet: req.body.addressWallet,
        },
        { totalScore: totalScore }
      );
    }
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
