const { ethers, JsonRpcProvider } = require("ethers");
const { ABI_BEET_TOKEN } = require("../utils/ABI");
const { modelTotalScore } = require("../schema/totalScore");

const provider = new JsonRpcProvider(
  process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING
);
const wallet = new ethers.Wallet(
  process.env.REACT_APP_KEY_PRIVATE_OWNER,
  provider
);

const tokenContract = new ethers.Contract(
  process.env.REACT_APP_ADDRESS_CONTRACT_BEET_TOKEN,
  ABI_BEET_TOKEN,
  wallet
);

const claimRewardTokens = async () => {
  console.log("starting claim reward BEET tokens automatically...");
  try {
    console.log("Getting database that has white-listed scores");
    let dataTotalScores = await modelTotalScore.find();
    if (dataTotalScores.length !== 0) {
      for (var i = 0; i < dataTotalScores.length; i++) {
        console.log("Sending...");
        let recipientAddress = dataTotalScores[i]["addressWallet"];
        // let amount = parseUnits(
        //   dataTotalScores[i]["totalScore"].toString(),
        //   process.env.REACT_APP_DECIMAL_TOKEN
        // );
        // console.log("amount:", amount);
        let transaction = await tokenContract.transfer(
          recipientAddress,
          "0x" +
            (
              process.env.REACT_APP_CLAIM_RATE *
              dataTotalScores[i]["totalScore"] *
              Math.pow(10, process.env.REACT_APP_DECIMAL_TOKEN)
            ).toString(16)
        );
        let transRecipt = await transaction.wait();
        console.log(
          `${i + 1} - Sent ${
            process.env.REACT_APP_CLAIM_RATE * dataTotalScores[i]["totalScore"]
          } BEET to ${dataTotalScores[i]["addressWallet"]}:`,
          `https://testnet.bscscan.com/tx/${transRecipt.hash}`
        );

        const now = new Date();
        const options = { timeZone: "America/New_York" };
        const estDateTime = now.toLocaleString("en-US", options);
        await modelTotalScore.findOneAndUpdate(
          { addressWallet: recipientAddress },
          {
            totalScore: 0,
            flagClaimed: true,
            timeClaimed: estDateTime,
          }
        );
        // console.log("transRecipt:", transRecipt.hash);
      }
    }
  } catch (error) {
    console.error("Error sending tokens:", error);
  }
};

module.exports = {
  claimRewardTokens: claimRewardTokens,
};
