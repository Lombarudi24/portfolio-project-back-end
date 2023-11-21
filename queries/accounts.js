const db = require("../db/dbConfig");

const getAllAccounts = async (bankdata_id) => {
  try {
    const allAccounts = await db.any(
      "SELECT * FROM accounts WHERE banksdata_id=$1",
      bankdata_id
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

const newAccount = async (account) => {
  try {
    const newAccount = await db.one(
      "INSERT INTO accounts (accopenbal, accopendate, accbal, acctype,  is_active, banksdata_id) VALUES($1, $2, $3, $4, $5, 46) RETURNING *",
      [
        account.accopenbal,
        account.accopendate,
        account.accbal,
        account.acctype,
         account.is_active,
        account.banksdata_id,
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
      "DELETE FROM accounts WHERE id = $1 RETURNING *",
      id
    );
    return deletedAccount;
  } catch (error) {
    return error;
  }
};

const updateAccount = async (account) => {
  try {
    const updatedAccount = await db.one(
      "UPDATE accounts SET accopenbal=$1, accopendate=$2, accbal=$3, acctype=$4, is_active=$5  banksdata_id=$6 WHERE id=$7 RETURNING *",
      [
        account.accopenbal,
        account.accopendate,
        account.accbal,
        account.acctype,
        account.is_active,
        account.banksdata_id,
        account.id,
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
