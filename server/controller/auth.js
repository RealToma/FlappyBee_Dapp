const express = require("express");
const { modelUsers } = require("../schema/users");
const { getCurrentTime } = require("../function/time");
const router = express.Router();
// const { google } = require("googleapis");

router.post("/check_white_list", async (req, res) => {
  const addressWallet = req.body.addressWallet;
  // console.log("wallet address:", req.body.addressWallet);

  try {
    // const sheets = google.sheets({
    //   version: "v4",
    //   auth: process.env.REACT_APP_API_GOOGLE_SHEET,
    // });

    // const spreadsheetId = process.env.REACT_APP_ID_GOOGLE_SHEET_WHITE_LIST;
    // const range = process.env.REACT_APP_NAME_GOOGLE_SHEET; // Specify the range of cells you want to read

    // const response = await sheets.spreadsheets.values.get({
    //   spreadsheetId,
    //   range,
    // });

    // const dataSheet = response.data.values;
    // // console.log("dataSheet:", dataSheet);
    // let arrayAddressWallet = [];
    // if (dataSheet.length !== 0) {
    //   for (var i = 1; i < dataSheet.length; i++) {
    //     if (dataSheet[i][7]?.toLowerCase() === addressWallet?.toLowerCase()) {
    //       arrayAddressWallet.push(dataSheet[i][7]);
    //     }
    //   }
    // } else {
    //   console.log("No sheet data found.");
    //   return res.json({
    //     flagSuccess: false,
    //   });
    // }
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

router.post("/add_user", async (req, res) => {
  let addressWallet = req.body.addressWallet;
  // console.log("wallet address:", addressWallet);
  try {
    let dataUser = await modelUsers.find({
      addressWallet: addressWallet,
    });

    if (dataUser.length !== 0) {
      // console.log("dataUser:", dataUser);
      let tempUser = await modelUsers.findOneAndUpdate(
        {
          addressWallet: addressWallet,
        },
        { dateLastLoggedIn: getCurrentTime("en-US", "America/New_York") }
      );
      return res.json({
        flagSuccess: "existed_user",
        dataUser: tempUser,
      });
    } else {
      let newUser = new modelUsers({
        addressWallet: addressWallet,
        countP2EAvailable: 0,
        dateJoined: getCurrentTime("en-US", "America/New_York"),
        dateLastLoggedIn: getCurrentTime("en-US", "America/New_York"),
        flagPermission: true,
      });
      let tempUser = await newUser.save();
      // console.log("after add new user:", tempUser);
      return res.json({
        flagSuccess: "new_user",
        dataUser: tempUser,
      });
    }
  } catch (error) {
    console.error("Error of adding user:", error);
  }
});

router.post("/get_count_p2e_available", async (req, res) => {
  try {
    const dataUser = await modelUsers.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataUser.length !== 0) {
      return res.json({
        flagSuccess: true,
        count: dataUser[0].countP2EAvailable,
      });
    } else {
      return res.json({
        flagSuccess: false,
        msgError: `You need to stake ${process.env.REACT_APP_AMOUNT_STAKE_DEFAULT} BEET.`,
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

router.post("/set_count_p2e_available", async (req, res) => {
  try {
    const dataUser = await modelUsers.find({
      addressWallet: req.body.addressWallet,
    });
    if (dataUser.length !== 0) {
      let tempCount = dataUser[0].countP2EAvailable - 1;
      let tempUser = await modelUsers.findOneAndUpdate(
        {
          addressWallet: req.body.addressWallet,
        },
        { countP2EAvailable: tempCount }
      );
      return res.json({
        flagSuccess: true,
        // dataUser: tempUser,
      });
    } else {
      return res.json({
        flagSuccess: false,
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
