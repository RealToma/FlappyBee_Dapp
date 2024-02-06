import { ethers } from "ethers";
import { CONTRACTS } from "../utils/constants";
import { ABI_BEET_STAKING, ABI_BEET_TOKEN } from "../utils/abi";
export const shortAddress = (address: any) => {
  return address?.slice(0, 6) + "..." + address?.slice(-4);
};

export const sortAllTimeScores = (dataScores: any) => {
  let tempData = dataScores.sort((a: any, b: any) => b.score - a.score);
  return tempData.slice(0, 10);
};

const get24hData = (dataScores: any) => {
  const currentTime = new Date();
  const currentTotalSeconds = Math.floor(currentTime.getTime() / 1000);
  // console.log(currentTotalSeconds);

  const timeOnedayBefore = currentTotalSeconds - 1 * 24 * 60 * 60;
  let temp24hData = [];
  for (var i = 0; i < dataScores.length; i++) {
    let dateEachTime = new Date(dataScores[i].timePlayed);
    let eachTotalSeconds = Math.floor(dateEachTime.getTime() / 1000);
    if (timeOnedayBefore < eachTotalSeconds) {
      temp24hData.push(dataScores[i]);
    }
  }

  // console.log(temp24hData);
  return temp24hData;
};

export const sort24hScores = (dataScores: any) => {
  let data24hBefore: any = get24hData(dataScores);
  data24hBefore.sort((a: any, b: any) => b.score - a.score);

  return data24hBefore.slice(0, 10);
};

export const shortFloat = (number: any, pointNum: any) => {
  if (!Number.isNaN(number) && Number.isInteger(number)) {
    return number;
  } else {
    return parseFloat(number).toFixed(pointNum); //number.toFixed(pointNum);
  }
};

export const isNumber = (number: any) => {
  if (!Number.isNaN(number) && Number.isInteger(number)) {
    return true;
  } else {
    return false;
  }
};

export const covertEthToWei = (value: any) => {
  return ethers.utils.parseUnits(value);
};

const urlRPC: any =
  (process.env.REACT_APP_NETWORK as any) === "mainnet"
    ? "https://bsc.publicnode.com"
    : "https://bsc-testnet.publicnode.com";

const provider: any = new ethers.providers.JsonRpcProvider(urlRPC);

const contractBEETToken = new ethers.Contract(
  CONTRACTS.BEETToken as any,
  ABI_BEET_TOKEN,
  provider
);

const contractBEETStaking = new ethers.Contract(
  CONTRACTS.BEETStaking as any,
  ABI_BEET_STAKING,
  provider
);

export const getAllBalance = async (account: any) => {
  const balanceBNB: any = await provider.getBalance(account);
  const formattedBalanceBSC: any = ethers.utils.formatEther(balanceBNB);
  // console.log("balanceBNB:", Number(formattedBalanceBSC));

  const balanceBEET: any = await contractBEETToken.balanceOf(account);
  const formattedBalanceBEET: any = ethers.utils.formatEther(balanceBEET);
  // console.log("balanceBEET:", Number(formattedBalanceBEET));

  const balanceBEETStaked: any = await contractBEETStaking.getTotalStakedAmount(
    account
  );

  const formattedBalanceBEETStaked: any =
    ethers.utils.formatEther(balanceBEETStaked);
  // console.log("balanceBEETStaked:", Number(formattedBalanceBEETStaked));

  const balanceBEETClaimableReward: any =
    await contractBEETStaking.getTotalClaimableRewards(account);
  const formattedBalancReward: any = ethers.utils.formatEther(
    balanceBEETClaimableReward
  );

  return {
    balanceBNB: Number(formattedBalanceBSC),
    balanceBEET: Number(formattedBalanceBEET),
    balanceBEETStaked: Number(formattedBalanceBEETStaked),
    balanceBEETClaimReward: Number(formattedBalancReward),
    balanceBEETNFT: 0,
  };
};
