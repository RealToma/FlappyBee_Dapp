const express = require("express");
const router = express.Router();
const { modelScore } = require("../schema/score");
const { google } = require("googleapis");

router.post("/check_white_list", async (req, res) => {
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

    const rows = response.data.values;
    if (rows.length) {
      console.log("Data:");
      rows.forEach((row) => {
        console.log(row);
      });
    } else {
      console.log("No data found.");
    }
  } catch (error) {
    console.error("Error reading sheet content:", error);
  }
});

module.exports = router;
