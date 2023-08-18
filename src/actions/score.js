import axios from "axios";

export const actionSetScore = (account, score, scoreBest) => {
  console.log("address", account)
  console.log("address", score)
  console.log("address", scoreBest)
  return axios
    .post("/api/score/set_score", {
      addressWallet: address,
      score: score,
      scoreBest: scoreBest,
    })
    .then((res) => {
      return res.data;
    });
};
