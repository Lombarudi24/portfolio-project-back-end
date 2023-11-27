const express = require("express");

const { getBankdata } = require("../queries/banksdata");

const accounts = express.Router({ mergeParams: true });

const { getAllAccounts, getAccount, updateAccount, newAccount, deleteAccount } = require("../queries/accounts")

accounts.get("/", async (req, res) => {
    const { banksdata_id } = req.params;
    const allAccounts = await getAllAccounts(banksdata_id);

    if (allAccounts[0]) {
        res.status(200).json(allAccounts)
    } else {
        res.status(400).json({ error: "server error" })
    }
});

accounts.get("/:id", async (req, res) => {
  const { banksdata_id, id } = req.params;
  const account = await getAccount(id);
  const bankdata = await getBankdata(banksdata_id);
  if (account) {
    res.json({ ...bankdata, account });
  } else {
    res.status(404).json({ error: " Account not found" });
  }
});


accounts.put("/:id", async (req, res) => {
    const { banksdata_id, id } = req.params;
    const body = req.body
  const updatedAccount = await updateAccount({id, banksdata_id, ...body})
  if (updatedAccount.id) {
    res.json(updatedAccount);
  } else {
    res.status(404).json({ error: " Account has not benn updated" });
  }
});

accounts.post("/:id", async (req, res) => {
  const { banksdata_id } = req.params;
  const body = req.body;
  const bankdata = await newAccount({ banksdata_id, ...body });
    res.json(bankdata);
});

accounts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAccaount = await deleteAccount(id);
  if (deletedAccaount.id) {
    res.status(200).json(deletedAccaount);
  } else {
    res.status(404).json({ error: "Account not found" });
  }
});


module.exports = accounts