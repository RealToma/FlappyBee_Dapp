import axios from "axios";

export const getStateTreasure = (dataTreasureSpots, addressWallet) => {
  console.log(process.env.REACT_APP_HOST);
  return axios
    .post("/api/treasure/get_state_treasure", {
      dataTreasure: dataTreasureSpots,
      addressWallet: addressWallet,
    })
    .then((res) => {
      return res.data.stateTreasure;
    });
};

export const getStateTreasureOnce = (addressWallet) => {
  return axios
    .post("/api/treasure/get_state_treasure_once", {
      addressWallet: addressWallet,
    })
    .then((res) => {
      return res.data;
    });
};

export const updateStateTreasure = (stateTreasure) => {
  return axios
    .post("/api/treasure/update_state_treasure", stateTreasure)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const setStateTreasureOnce = (stateTreasure) => {
  console.log("actions of treasure once:", stateTreasure);
  return axios
    .post("/api/treasure/set_state_treasure_once", stateTreasure)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const callMintTreasure = (addressTo, type, name) => {
  return axios
    .post("/api/treasure/mint_treasure", {
      address: addressTo,
      type: type,
      name: name,
    })
    .then((res) => {
      console.log(res.data.flagSuccess);
      return res.data.flagSuccess;
    });
};

export const setTreasureBoxOpened = (address) => {
  return axios
    .post("/api/treasure/set_treasure_box_opened", {
      address: address,
    })
    .then((res) => {
      return res.data;
    });
};
