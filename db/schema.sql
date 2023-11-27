DROP DATABASE IF EXISTS banksdata_dev;
CREATE DATABASE banksdata_dev;

\c banksdata_dev

CREATE TABLE banksdata (
    id SERIAL PRIMARY KEY,
    ssn INTEGER NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    middlename TEXT,
    lastname VARCHAR(50) NOT NULL,
    dob  DATE,
    email TEXT,
    city TEXT,
    mobile_num BIGINT,
    employer VARCHAR(20) NOT NULL
);



-- DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    accopenbal INTEGER,
    accopendate DATE,
    accbal INTEGER,
    acctype TEXT NOT NULL,
    is_active BOOLEAN,
    banksdata_id INTEGER REFERENCES banksdata (id) ON DELETE CASCADE 
);



-- DROP TABLE IF EXISTS transactions;

--  CREATE TABLE transactions (
--     id SERIAL PRIMARY KEY,
--     trans_date DATE,
--     trans_type TEXT NOT NULL,
--     trans_amount INTEGER ,
--     bankdata_id INTEGER REFERENCES bankdata (id) ON DELETE CASCADE,
--     acccount_id INTEGER REFERENCES acccount (id) ON DELETE CASCADE,
-- )


