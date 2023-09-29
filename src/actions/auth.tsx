import axios from "axios";

export const checkWhiteList = (account: any) => {
  return axios
    .post("/api/auth/check_white_list", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};
