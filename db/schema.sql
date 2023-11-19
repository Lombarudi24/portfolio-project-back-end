DROP DATABASE IF EXISTS bankdata_dev;
CREATE DATABASE bankdata_dev;

\c bankdata_dev

CREATE TABLE bankdata(
    id SERIAL PRIMARY KEY,
    ssn INTEGER VARCHAR(11) NOT NULL
    firstname VARCHAR(50) NOT NULL,
    middlename TEXT,
    lastname VARCHAR(50) NOT NULL,
    dob  INTEGER (10) ,
    email TEXT
    city TEXT,
    mobile_num INTEGER VARCHAR(10)
    jobcategory VARCHAR(20) NOT NULL,
);

DROP TABLE IF EXISTS acccount;

CREATE TABLE acccount(
    id PRIMARY KEY,
    accopenbal INTEGER(10)
    accopendate DATE,
    accbal INTEGER(10)
    acctype TEXT NOT NULL,
    is_active BOOLEAN,
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


