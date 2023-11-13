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

export const actionAddUser = (account: any) => {
  return axios
    .post("/api/auth/add_user", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};

export const actionGetCountP2EAvailable = (account: any) => {
  return axios
    .post("/api/auth/get_count_p2e_available", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};

export const actionSetCountP2EAvailable = (account: any) => {
  return axios
    .post("/api/auth/set_count_p2e_available", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};
