const express = require("express");

const { getBankdata } = require("../queries/banksdata");

const accounts = express.Router({ mergeParams: true });

const { getAllAccounts } = require("../queries/accounts")

accounts.get("/", async (req, res) => {
    const { banksdata_id } = req.params;
    const accounts = await getAllAccounts(banksdata_id);
    const bankdata = await getBankdata(banksdata_id);
console.log(accounts)
    if (bankdata.id) {
        res.status(200).json({ ...bankdata, accounts })
    } else {
        res.status(400).json({ error: "server error" })
    }
});






module.exports = accounts