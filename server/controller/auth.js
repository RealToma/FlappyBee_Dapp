const express = require("express");
const router = express.Router();
const { modelScore } = require("../schema/score");
const { google } = require("googleapis");

router.post("/check_white_list", async (req, res) => {
  const addressWallet = req.body.addressWallet;
  console.log("wallet address:", req.body.addressWallet);

  try {
    const sheets = google.sheets({
      version: "v4",
      auth: process.env.REACT_APP_API_GOOGLE_SHEET,
    });

    const spreadsheetId = process.env.REACT_APP_ID_GOOGLE_SHEET_WHITE_LIST;
    const range = "Sheet1"; // Specify the range of cells you want to read

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const dataSheet = response.data.values;

    let arrayAddressWallet = [];
    if (dataSheet.length !== 0) {
      for (var i = 1; i < dataSheet.length; i++) {
        if (dataSheet[i][7].toLowerCase() === addressWallet.toLowerCase()) {
          arrayAddressWallet.push(dataSheet[i][7]);
        }
      }
    } else {
      console.log("No sheet data found.");
      return res.json({
        flagSuccess: false,
      });
    }
    console.log("arrayAddressWallet:", arrayAddressWallet);
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
