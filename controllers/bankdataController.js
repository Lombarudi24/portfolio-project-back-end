const express = require("express")
const bankdata = express.Router();

const accountController = require('./accountsController');

bankdata.use("/:bankdata_id/account", accountController)

const { getAllBankdata } = require("../queries/bankdata")


bankdata.get("/", async (req, res) => {
    const allBankdata = await getAllBankdata();
    if (allBankdata) {
        res.status(200).json(allBankdata)
    } else {
        res.status(500).json({error: "server error"})
    }
})
