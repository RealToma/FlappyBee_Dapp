import axios from "axios";

export const actionSetScore = (account, score) => {
  return axios
    .post("/api/score/set_score", {
      addressWallet: account,
      score: score,
    })
    .then((res) => {
      return res.data;
    });
};
