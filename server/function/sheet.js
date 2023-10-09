const { google } = require("googleapis");
const { modelUsers } = require("../schema/users");

const coverSheetToDatabase = async () => {
  try {
    const sheets = google.sheets({
      version: "v4",
      auth: process.env.REACT_APP_API_GOOGLE_SHEET,
    });

    const spreadsheetId = process.env.REACT_APP_ID_GOOGLE_SHEET_WHITE_LIST;
    const range = process.env.REACT_APP_NAME_GOOGLE_SHEET; // Specify the range of cells you want to read

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const dataSheet = response.data.values;
    // console.log("dataSheet:", dataSheet);
    // console.log("databaseUsers", databaseUsers);
    if (dataSheet.length !== 0) {
      for (var i = 1; i < dataSheet.length; i++) {
        if (
          dataSheet[i][9] === "yes" ||
          dataSheet[i][9] === "Yes" ||
          dataSheet[i][9] === "YES" ||
          dataSheet[i][9] === "Y" ||
          dataSheet[i][9] === true ||
          dataSheet[i][9] === "true" ||
          dataSheet[i][9] === "True" ||
          dataSheet[i][9] === "TRUE"
        ) {
          let databaseUser = await modelUsers.find({
            $or: [
              {
                adressEmail: dataSheet[i][3],
                usernameX: dataSheet[i][4],
                addressWallet: dataSheet[i][7],
              },
            ],
          });
          // console.log("databaseUser:", databaseUser);

          if (databaseUser.length === 0) {
            let modelEachUser = new modelUsers({
              adressEmail: dataSheet[i][3],
              fullname: dataSheet[i][2],
              usernameX: dataSheet[i][4],
              urlXPostSharing: dataSheet[i][5],
              numberXFollowers: dataSheet[i][6],
              addressWallet: dataSheet[i][7],
              flagRules: dataSheet[i][8],
              flagVerified: dataSheet[i][9],
              timeSubmittedForm: dataSheet[i][0],
              countFreeMint: 0,
            });
            await modelEachUser.save();
          }
        }
      }
    } else {
      console.log("No sheet data found.");
    }
  } catch (error) {
    console.log("Google Sheet Error:", error);
  }
};

module.exports = {
  coverSheetToDatabase: coverSheetToDatabase,
};
