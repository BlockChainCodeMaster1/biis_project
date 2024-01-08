import db from "../database/db.js";
const SOGA = db.SOGA;

const WHITELIST = [
  "9ppiEsLybEazCHHaM1y2AcpEPgHX82aHPZD2E5LuL4Z1",
  "9ppiEsLybEazCHHaM1y2AcpEPgHX82aHPZD2E5LuL4ZQ",
];

export async function getWhiteListAuth(req, res) {
  const { address } = req.params;

  const is_whitelist = WHITELIST.indexOf(address);
  console.log("include_whitelist", include_whitelist);

  const is_minted = await SOGA.count({
    where: {
      address: address,
    },
  });

  res.send({
    msg: "success",
    code: 1,
    data: {
      minted: is_minted > 0 ? true : false,
      whiteList: is_whitelist != -1 ? true : false,
    },
  });

  // console.log("is_whitelist", is_whitelist)
}

export async function whiteListMint(req, res) {
  let { address, txid } = req.body;

  if (!address || !txid) {
    res.send({
      msg: "Incomplete parameter",
      code: 0,
    });
    return;
  }

  const mint_number = await SOGA.count();

  if (mint_number >= 2) {
    res.send({
      msg: "Whitelist Mint is overflow",
      code: 0,
    });
    return;
  }

  const is_minted = await SOGA.count({
    where: {
      address: address,
    },
  });

  if (is_minted > 0) {
    res.send({
      msg: "Already mint",
      code: 0,
    });
    return;
  }

  const result = await SOGA.create({
    address: address,
    tx: txid,
    is_whitelist: "true",
  });

  if (result) {
    res.send({
      msg: "Success",
      code: 1,
    });
  } else {
    res.send({
      msg: "Save failure",
      code: 0,
    });
  }
}
