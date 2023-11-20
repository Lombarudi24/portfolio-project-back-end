DROP DATABASE IF EXISTS bankdata_dev;
CREATE DATABASE bankdata_dev;

\c bankdata_dev

CREATE TABLE bankdata (
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



DROP TABLE IF EXISTS acccounts;

CREATE TABLE acccounts (
    id SERIAL PRIMARY KEY,
    accopenbal INTEGER,
    accopendate DATE,
    accbal INTEGER,
    acctype TEXT NOT NULL,
    is_active BOOLEAN,
    bankdata_id INTEGER REFERENCES bankdata (id) ON DELETE CASCADE 
)



-- DROP TABLE IF EXISTS transactions;

--  CREATE TABLE transactions (
--     id SERIAL PRIMARY KEY,
--     trans_date DATE,
--     trans_type TEXT NOT NULL,
--     trans_amount INTEGER ,
--     bankdata_id INTEGER REFERENCES bankdata (id) ON DELETE CASCADE,
--     acccount_id INTEGER REFERENCES acccount (id) ON DELETE CASCADE,
-- )


