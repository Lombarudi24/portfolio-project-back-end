const express = require("express");

const { getBankdata } = require("../queries/bankdata")

const accounts = express.Router({ mergeParams: true });

const { getAllAccounts } = require("../queries/accounts")

accounts.get("/", async (req, res) => {
    const { bankdata_id } = req.params;
    const accounts = await getAllAccounts(bankdata_id);
    const bankdata = await getBankdata(bankdata_id);

    if (bankdata.id) {
        res.status(200).json({ ...bankdata, accounts })
    } else {
        res.status(400).json({ error: "server error" })
    }
});






module.exports = accounts