const express = require("express");
const router = express.Router();
const {
  PhantasmaTS,
  ScriptBuilder,
  Transaction,
  Base16,
  PhantasmaKeys,
  Address,
} = require("phantasma-ts");

router.post("/mint_outfit", async (req, res) => {
  let tempHash = await mintOutfit(
    req.body.address,
    req.body.type,
    req.body.name
  );

  console.log(tempHash)
  if (tempHash !== null || tempHash !== undefined) {
    return res.json({
      flagSuccess: true,
    });
  } else {
    return res.json({
      flagSuccess: false,
    });
  }
});

async function mintOutfit(toAddress, type, name) {
  let Keys = PhantasmaKeys.fromWIF(process.env.REACT_APP_PRIVATE_OWNER);
  let expiration = new Date(Date.now() + 60 * 60 * 10 * 1000);
  let script;

  let sb = new ScriptBuilder();
  let myScript = sb.AllowGas(Keys.Address, Address.Null, 100000, 210000);

  // myScript = sb.CallInterop("Runtime.TransferTokens", [Keys.Address.Text, "P2K65RZhfxZhQcXKGgSPZL6c6hkygXipNxdeuW5FU531Bqc", "SOUL", 1000000000]);
  const nowTime = new Date();
  const offset = 7 - nowTime.getDay();

  nowTime.setMilliseconds(0);
  nowTime.setSeconds(0);
  nowTime.setHours(0);
  nowTime.setDate(nowTime.getDate() + offset);

  myScript = sb.CallContract(process.env.REACT_APP_CONTRACT, "mintOutfit", [
    toAddress,
    type,
    name,
    nowTime.getTime() / 1000,
  ]);

  myScript = sb.SpendGas(Keys.Address);
  script = myScript.EndScript();

  const Payload = Base16.encode("Sandy Games");
  const tx = new Transaction(
    process.env.REACT_APP_NETWORK,
    "main",
    script,
    expiration,
    Payload
  );

  tx.signWithKeys(Keys);
  const rawTx = Base16.encodeUint8Array(tx.ToByteAray(true));
  let RPC = new PhantasmaTS.PhantasmaAPI(
    process.env.REACT_APP_RPC_URL,
    null,
    process.env.REACT_APP_NETWORK
  );
  let hash;
  try {
    hash = await RPC.sendRawTransaction(rawTx);
  } catch (error) {
    console.log(error);
  }
  return hash;

  // console.info(rawTx);
}

module.exports = router;
