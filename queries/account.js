const db = require("../db/dbConfig.js");

const getAllAccounts = async (bankdata_id) => {
  try {
    const allAccounts = await db.any(
      "SELECT * FROM Accounts WHERE bankdata_id=$1",
      bookmark_id
    );
    return allAccounts;
  } catch (error) {
    return error;
  }
};

const getAccount = async (id) => {
  try {
    const oneAccount = await db.one("SELECT * FROM accounts WHERE id=$1", id);
    return oneAccount;
  } catch (error) {
    return error;
  }
};

const newAccount = async (Account) => {
  try {
    const newAccount = await db.one(
      "INSERT INTO Accounts (Accounter, title, content, rating, bookmark_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        Account.Accounter,
        Account.title,
        Account.content,
        Account.rating,
        Account.bookmark_id,
      ]
    );
    return newAccount;
  } catch (error) {
    return error;
  }
};

const deleteAccount = async (id) => {
  try {
    const deletedAccount = await db.one(
      "DELETE FROM Accounts WHERE id = $1 RETURNING *",
      id
    );
    return deletedAccount;
  } catch (error) {
    return error;
  }
};

const updateAccount = async (Account) => {
  try {
    const updatedAccount = await db.one(
      "UPDATE Accounts SET Accounter=$1, title=$2, content=$3, rating=$4, bookmark_id=$5 where id=$6 RETURNING *",
      [
        Account.Accounter,
        Account.title,
        Account.content,
        Account.rating,
        Account.bookmark_id,
        Account.id,
      ]
    );
    return updatedAccount;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAccounts,
  getAccount,
  newAccount,
  deleteAccount,
  updateAccount,
};
