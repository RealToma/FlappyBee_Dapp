const { ethers } = require("ethers");
const tokenABI = require("<path_to_token_contract_ABI>");

const provider = new ethers.providers.JsonRpcProvider(
  "<your_json_rpc_provider_url>"
);
const wallet = new ethers.Wallet("<your_private_key>", provider);

const tokenContract = new ethers.Contract(
  "<token_contract_address>",
  tokenABI,
  wallet
);

const recipientAddress = "<recipient_address>";
const amount = ethers.utils.parseUnits("<amount_to_send>", "<token_decimals>");

const sendTokens = async () => {
  try {
    const transaction = await tokenContract.transfer(recipientAddress, amount);
    await transaction.wait();
    console.log("Tokens sent successfully!");
  } catch (error) {
    console.error("Error sending tokens:", error);
  }
};
