import axios from "axios";

export const callMintOutfit = (addressTo, type, name) => {
  return axios
    .post("/api/mint/mint_outfit", {
      address: addressTo,
      type: type,
      name: name,
    })
    .then((res) => {
      return res.data.flagSuccess;
    });
};
