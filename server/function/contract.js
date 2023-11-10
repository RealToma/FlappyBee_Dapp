const { ethers, JsonRpcProvider } = require("ethers");
const { ABI_BEE_STAKING } = require("../utils/ABI");

const handleCatchStakedEvent = async () => {
  const provider = new JsonRpcProvider(process.env.REACT_APP_URL_PRC_PROVIDER);
  const addressContractBEETStaking =
    process.env.REACT_APP_ADDRESS_CONTRACT_BEET_STAKING;
  const abiBEETStaking = ABI_BEE_STAKING;

  const contract = new ethers.Contract(
    addressContractBEETStaking,
    abiBEETStaking,
    provider
  );

  try {
    // Listen for all events

    contract.on("*", (eventName, eventArgs) => {
      console.log(`Event ${eventName} with args:`, eventArgs);
      // Do something with the event data
    });
  } catch (error) {
    console.log("error of handleCatchStakedEvent:", handleCatchStakedEvent);
  }
};

module.exports = {
  handleCatchStakedEvent: handleCatchStakedEvent,
};
