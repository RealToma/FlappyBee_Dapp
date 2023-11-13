const { ethers, JsonRpcProvider, Interface, formatEther } = require("ethers");
const { ABI_BEE_STAKING } = require("../utils/ABI");
const { modelUsers } = require("../schema/users");
const { getCurrentTime } = require("./time");
const { modelStakedLogs } = require("../schema/logs");
// const { serverWebsocket } = require("../config/websocket");

const handleCatchStakedEvent = async () => {
  console.log("========== handle catch staked event ============");
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
    contract.on("*", async (eventName, eventArgs) => {
      //   console.log(`Event ${eventName} with args:`, eventArgs);
      // Do something with the event data

      //   let logData = eventName.log.data;
      //   console.log("logData:", logData);
      let transactionHash = eventName.log.transactionHash;
      console.log("transactionHash:", transactionHash);

      const receipt = await provider.getTransactionReceipt(transactionHash);
      //   console.log("receipt:", receipt);

      // Decode the log data
      //   const abiCoder = new AbiCoder();
      //   const decodedData = abiCoder.decode(ABI_BEE_STAKING, logData);

      //   console.log("decodedData:", decodedData);

      // Create an interface for the event ABI
      const eventInterface = new Interface(ABI_BEE_STAKING);
      const logs = receipt.logs.map((log) => eventInterface.parseLog(log));

      // console.log("logs:", logs);
      logs.forEach(async (log) => {
        // console.log("log:", log);

        if (log !== null) {
          console.log("Event Name:", log?.name); // Event name
          console.log("Event Args:", log?.args); // Event arguments
          let eventName = log.name;
          if (eventName === "Staked") {
            let addressWallet = log.args[0];
            let tempAmountStaked = log.args[1];
            let amountStaked = Number(formatEther(tempAmountStaked));
            console.log("Staked Address:", addressWallet);
            console.log("Staked Amount:", amountStaked);

            let modelLog = new modelStakedLogs({
              adressWallet: addressWallet,
              amountStaked: amountStaked,
              transactionHash: transactionHash,
              dateProcessed: getCurrentTime("en-US", "America/New_York"),
            });

            await modelLog.save();

            let dataStakedUser = await modelUsers.find({
              addressWallet: addressWallet,
            });
            // console.log(
            //   "dataStakedUser:",
            //   dataStakedUser[0].countP2EAvailable
            // );
            if (dataStakedUser.length !== 0) {
              let tempCountP2E =
                dataStakedUser[0].countP2EAvailable +
                amountStaked / process.env.REACT_APP_AMOUNT_STAKE_DEFAULT;
              console.log("tempCountP2E:", tempCountP2E);
              await modelUsers.findOneAndUpdate(
                {
                  addressWallet: addressWallet,
                },
                {
                  countP2EAvailable: Number(tempCountP2E),
                }
              );
            } else {
              let newUser = new modelUsers({
                addressWallet: addressWallet,
                countP2EAvailable:
                  amountStaked / process.env.REACT_APP_AMOUNT_STAKE_DEFAULT,
                dateJoined: getCurrentTime("en-US", "America/New_York"),
                dateLastLoggedIn: getCurrentTime("en-US", "America/New_York"),
                flagPermission: true,
              });
              await newUser.save();
            }
          }
        }
      });

      //   const decodedLog = eventInterface.decodeEventLog("Staked", logData);
      //  console.log("decodedLog:", decodedLog);
    });
  } catch (error) {
    console.log("error of handleCatchStakedEvent:", handleCatchStakedEvent);
  }
};

module.exports = {
  handleCatchStakedEvent: handleCatchStakedEvent,
};
