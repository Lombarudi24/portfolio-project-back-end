const db = require("../db/dbConfig");

const getAllBankdata = async () => {
  try {
    const allBankdata = await db.any("SELECT * FROM banksdata");
    return allBankdata;
  } catch (error) {
    return error;
  }
};

const getBankdata = async (id) => {
  try {
    const oneBankdata = await db.one("SELECT * FROM banksdata WHERE id=$1", id);
    return oneBankdata;
  } catch (error) {
    return error;
  }
};

// CREATE
const createBankdata = async (bankdata) => {
  try {
    const newBankdata = await db.one(
      "INSERT INTO banksdata (ssn, firstname, middlename, lastname, dob, email, city, mobile_num, employer) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [bankdata.ssn, bankdata.firstname, bankdata.middlename, bankdata.lastname, bankdata.dob, bankdata.email, bankdata.city, bankdata.mobile_num, bankdata.employer]
    );
    return newBankdata;
  } catch (error) {
    return error;
  }
};

const deleteBankdata = async (id) => {
  try {
    const deletedBankdata = await db.one(
      "DELETE FROM banksdata WHERE id = $1 RETURNING *",
      id
    );
    return deletedBankdata;
  } catch (error) {
    return error;
  }
};

const updateBankdata = async (id, bankdata) => {
  try {
    const updatedBankdata = await db.one(
      "UPDATE Banksdata SET ssn=$1, firstname=$2, middlename=$3, lastname=$4, dob=$5, email=$6, city=$7, mobile_num=$8, employer=$9 WHERE id=$10 RETURNING *",
      [
        bankdata.ssn,
        bankdata.firstname,
        bankdata.middlename,
        bankdata.lastname,
        bankdata.dob,
        bankdata.email,
        bankdata.city,
        bankdata.mobile_num,
        bankdata.employer,
        id
      ]
    );
    return updatedBankdata;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBankdata,
  getBankdata,
  createBankdata,
  deleteBankdata,
  updateBankdata,
};
