const express = require("express");
const router = express.Router();
const { modelScore, modelStagingScore } = require("../schema/score");
const {
  modelTotalScore,
  modelStagingTotalScore,
} = require("../schema/totalScore");

router.post("/set_score", async (req, res) => {
  // console.log(new Date().toLocaleString());

  // console.log("type:", req.body.typeGame);
  const now = new Date();
  const options = { timeZone: "America/New_York" };
  const estDateTime = now.toLocaleString("en-US", options);

  try {
    let newScore;
    if (req.body.typeGame === "p2e") {
      newScore = new modelScore({
        addressWallet: req.body.addressWallet,
        score: req.body.score,
        timePlayed: estDateTime,
      });
    } else {
      newScore = new modelStagingScore({
        addressWallet: req.body.addressWallet,
        score: req.body.score,
        timePlayed: estDateTime,
      });
    }

    await newScore.save();
    let dataEachTotalScores, newTotalScore;
    if (req.body.typeGame === "p2e") {
      dataEachTotalScores = await modelTotalScore.find({
        addressWallet: req.body.addressWallet,
      });
      if (dataEachTotalScores.length === 0) {
        newTotalScore = new modelTotalScore({
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
    } else {
      dataEachTotalScores = await modelStagingTotalScore.find({
        addressWallet: req.body.addressWallet,
      });
      if (dataEachTotalScores.length === 0) {
        newTotalScore = new modelStagingTotalScore({
          addressWallet: req.body.addressWallet,
          totalScore: req.body.score,
          flagClaimed: false,
          timeClaimed: "not_claimed",
        });
        await newTotalScore.save();
      } else {
        let totalScore = dataEachTotalScores[0].totalScore + req.body.score;
        await modelStagingTotalScore.findOneAndUpdate(
          {
            addressWallet: req.body.addressWallet,
          },
          { totalScore: totalScore }
        );
      }
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
    let dataScores = await modelScore.find();
    if (dataScores.length !== 0) {
      return res.json({
        flagSuccess: true,
        dataScores: dataScores,
      });
    } else {
      return res.json({
        flagSuccess: false,
        msgError: "Couldn't fetch the data!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      flagSuccess: false,
      msgError: error,
    });
  }
});

router.get("/get_all_free_scores", async (req, res) => {
  try {
    let dataScores = await modelStagingScore.find();
    if (dataScores.length !== 0) {
      return res.json({
        flagSuccess: true,
        dataScores: dataScores,
      });
    } else {
      return res.json({
        flagSuccess: false,
        msgError: "Couldn't fetch the data!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      flagSuccess: false,
      msgError: error,
    });
  }
});

router.post("/get_user_claim_score", async (req, res) => {
  try {
    let dataClaimSocre = await modelTotalScore.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataClaimSocre.length !== 0) {
      return res.json({
        flagSuccess: true,
        dataClaimScore: dataClaimSocre[0],
      });
    } else {
      return res.json({
        flagSuccess: false,
        msgError:
          "You don't have any BEET tokens to claim. Please try to get BEET tokens while playing the game.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      flagSuccess: false,
      msgError: error,
    });
  }
});

module.exports = router;
