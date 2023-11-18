DROP DATABASE IF EXISTS bankdata_dev;
CREATE DATABASE bankdata_dev;

\c bankdata_dev

CREATE TABLE bankdata(
    id SERIAL PRIMARY KEY,
    ssn INT VARCHAR(9) NOT NULL
    firstname VARCHAR(50) NOT NULL,
    middlename TEXT,
    lastname VARCHAR(50) NOT NULL,
    dob  DATE ,
    email TEXT
    city TEXT,
    mobilenum INT VARCHAR(10)
    jobcategory VARCHAR(20) NOT NULL,
);

DROP TABLE IF EXISTS acccount;

CREATE TABLE acccount(
    id PRIMARY KEY,
    accopenbal INT(10)
    accopendate DATE,
    acctype TEXT NOT NULL,
    accstatus BOOLEAN,
    bankdata_id INTEGER REFERENCES bankdata (id) ON DELETE CASCADE 
);

DROP TABLE IF EXISTS transactions;

transactions (
    id PRIMARY KEY,
    trans_date DATE,
    trans_type TEXT NOT NULL,
    trans_amount INTEGER VARCHAR(10),
    bankdata_id INTEGER REFERENCES bankdata (id) ON DELETE CASCADE,
    acccount_id INTEGER REFERENCES acccount (id) ON DELETE CASCADE,
)


