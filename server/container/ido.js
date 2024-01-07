import db from "../database/db.js";
const IDO = db.IDO;


export async function getTotalPublicSale(req, res) {
    const totalUsers = await IDO.count({
        where: {
        state: 1,
        },
    });
    console.log("totalUsers",totalUsers)
}