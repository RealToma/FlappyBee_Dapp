const { ethers, JsonRpcProvider } = require("ethers");
const { abiTokenBEET } = require("../utils/ABI");
const { modelTotalScore } = require("../schema/totalScore");

const provider = new JsonRpcProvider(
  process.env.REACT_APP_URL_PRC_PROVIDER
);
const wallet = new ethers.Wallet(
  process.env.REACT_APP_KEY_PRIVATE_OWNER,
  provider
);

const tokenContract = new ethers.Contract(
  process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT,
  abiTokenBEET,
  wallet
);

// const recipientAddress = "<recipient_address>";
// const amount = ethers.utils.parseUnits(
//   "<amount_to_send>",
//   process.env.REACT_APP_DECIMAL_TOKEN
// );

const claimRewardTokens = async () => {
  console.log("=== step1 ===");
  try {
    let dataTotalScores = await modelTotalScore.find();
    console.log("=== step2 ===");
    console.log("dataTotalScores:", dataTotalScores);
    // const transaction = await tokenContract.transfer(recipientAddress, amount);
    // await transaction.wait();
    console.log("Tokens sent successfully!");
  } catch (error) {
    console.error("Error sending tokens:", error);
  }
};

module.exports = {
  claimRewardTokens: claimRewardTokens,
};
