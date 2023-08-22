import axios from "axios";

export const actionSetScore = (account: any, score: any) => {
  return axios
    .post("/api/score/set_score", {
      addressWallet: account,
      score: score,
    })
    .then((res) => {
      return res.data;
    });
};

export const actionGetAllScores = () =>{
  return axios
  .get("/api/score/get_all_scores")
  .then((res) => {
    return res.data;
  });
}
