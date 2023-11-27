const express = require("express")
const banksdata = express.Router();

const accountsController = require("./accountsController");

banksdata.use("/:banksdata_id/accounts", accountsController);

const {
  getAllBankdata,
  getBankdata,
  createBankdata,
  deleteBankdata,
  updateBankdata,
} = require("../queries/banksdata");

banksdata.get("/", async (req, res) => {
  const allBankdata = await getAllBankdata();
  if (allBankdata[0]) {
    res.status(200).json(allBankdata);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

banksdata.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bankdata = await getBankdata(id);
  if (bankdata) {
    res.json(bankdata);
  } else {
    res.status(404).json({ error: "not found" });
  }
});



banksdata.post("/", async (req, res) => {
  try {
    const body = req.body
    const newBankdata = await createBankdata(body);
    res.json(newBankdata);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});


banksdata.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBankdata = await updateBankdata(id, req.body);
  res.status(200).json(updatedBankdata);
});




banksdata.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBankdata = await deleteBankdata(id);
  if (deletedBankdata) {
    res.status(200).json(deletedBankdata);
  } else {
    res.status(404).json("Data was not deleted");
  }
});




module.exports = banksdata;