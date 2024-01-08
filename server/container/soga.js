import db from "../database/db.js";
const SOGA = db.SOGA;

const WHITELIST = [
    "9ppiEsLybEazCHHaM1y2AcpEPgHX82aHPZD2E5LuL4Z1",
    "9ppiEsLybEazCHHaM1y2AcpEPgHX82aHPZD2E5LuL4ZQ",
];

export async function getWhiteListAuth(req, res) {
    const { address } = req.params;

    const include_whitelist = WHITELIST.indexOf(address)
    console.log("include_whitelist", include_whitelist);

    const is_whitelist = await SOGA.count({
        where: {
        address: address,
        },
    });

    res.send({
        msg: "success",
        code: 1,
        data: {
            minted: is_whitelist > 0 ? true : false,
            whiteList: include_whitelist != -1 ? true : false
        },
    });

    // console.log("is_whitelist", is_whitelist)
}

