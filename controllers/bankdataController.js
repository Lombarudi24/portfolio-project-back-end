const express = require("express")
const bankdata = express.Router();

const accountsController = require('./accountsController');

bankdata.use("/:bankdata_id/accounts", accountsController)

const { getAllBankdata, getBankdata, createBankdata, deleteBankdata, updateBankdata } = require("../queries/bankdata")


bankdata.get("/", async (req, res) => {
    const allBankdata = await getAllBankdata();
    if (allBankdata) {
        res.status(200).json(allBankdata)
    } else {
        res.status(500).json({error: "server error"})
    }
})



bankdata.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bankdata = await getBankdata(id);
  if (bankdata) {
    res.json(bankdata);
  } else {
    res.status(404).json({ error: "not found" });
  }
});



bankdata.post("/",  async (req, res) => {
  try {
    const bankdata = await createBankdata(req.body);
    res.json(bankdata);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});


bankdata.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBankdata = await deleteBankdata(id);
  if (deletedBankdata.id) {
    res.status(200).json(deletedBankdata);
  } else {
    res.status(404).json("Bankdata not found");
  }
});


bankdata.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedBankdata = await updateBankdata(id, req.body);
    res.status(200).json(updatedBankdata);
  }
);




module.exports = bankdata;