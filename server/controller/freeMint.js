const express = require("express");
const router = express.Router();
const { modelUsers } = require("../schema/users");
const { modelNotifyClaimUsers } = require("../schema/notifyClaimUsers");

router.post("/set_count", async (req, res) => {
  try {
    const dataUser = await modelUsers.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataUser.length !== 0) {
      let tempCount = dataUser[0].countFreeMint;
      if (tempCount >= 3) {
        return res.json({
          flagSuccess: false,
          msgError: "You can't play anymore. Your fee mint event has expired.",
        });
      } else {
        await modelUsers.findOneAndUpdate(
          {
            addressWallet: req.body.addressWallet,
          },
          { countFreeMint: tempCount + 1 }
        );
        return res.json({
          flagSuccess: true,
          count: tempCount + 1,
        });
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

router.post("/get_count", async (req, res) => {
  try {
    const dataUser = await modelUsers.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataUser.length !== 0) {
      return res.json({
        flagSuccess: true,
        count: dataUser[0].countFreeMint,
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

router.post("/submit_claim_notify", async (req, res) => {
  console.log("submit:", req.body);

  try {
    let userNotifyClaim = await modelNotifyClaimUsers.find({
      addressEmail: req.body.email,
    });
    if (userNotifyClaim.length !== 0) {
      return res.json({
        flagSuccess: false,
        msgError: "Your email has already been submitted.",
      });
    } else {
      const now = new Date();
      const options = { timeZone: "America/New_York" };
      const estDateTime = now.toLocaleString("en-US", options);

      let tempUserNotifyClaim = new modelNotifyClaimUsers({
        addressWallet: req.body.addressWallet,
        addressEmail: req.body.email,
        timeSubmit: estDateTime,
      });
      await tempUserNotifyClaim.save();
      return res.json({
        flagSuccess: true,
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
