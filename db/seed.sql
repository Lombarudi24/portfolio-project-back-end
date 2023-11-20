\c bankdata_dev;


INSERT INTO bankdata (ssn, firstname, middlename, lastname, dob, email, city, mobile_num, employer )
VALUES
('123452354', 'Allie', 'G', 'Morisen', '09-10-1983', 'Morisen8310@gmail.com', 'Dover', '9733881436', 'Amazon'),
('239080554', 'Lois', 'Di', 'Nominator', '12-24-1973', 'makeitup23@gmail.com', 'Bayonne', '8623881436', 'Shoprite'),
('313541309', 'Minnie', 'Van','Ryder', '09-10-1985', 'vanryder0@yahoo.com', 'Houston', '9738385463', 'Catch Air'),
('634860987', 'Anita', '', 'Letterback', '01-28-1960', 'Maniletter60@yahoo.com', 'Imocali', '3058462138', 'Avon'),
('354107563', 'Isabelle', '', 'Ringing', '09-10-1988', 'isabellering28@gmail.com', 'Leihigt', '2393045087', 'BLB'),
('675454067', 'Ivan', 'E', 'Yang', '08-29-1974', 'Ivneyang98@hotmail.com', 'Dover', '3056743853', 'Amazon'),
('435026754', 'Mustafa', 'L', 'Stanley', '05-24-1974', 'LstanleyMustafa@aol.com', 'Miamidade', '8622306539', 'City Market'),
('790048758', 'Carmen', 'M', 'Attaway', '04-27-1978', 'carmenAttaway09@aol.com', 'Moristown', '9739082453', 'Fibnet Llc'),
('790048758', 'Manny', 'I', 'Ivanka', '03-22-2000', 'Ivankaimanni@hotmail.com', 'Orange', '5648562908', 'Roseber Entreprise'),
('790048758', 'Norma', 'W', 'Willie', '10-17-68', 'williewnorma68@goutlook.com', 'New Brunswik', '5463872698', 'Emetech'),
('790048758', 'Theresa', 'R', 'Normandi', '05-11-1988', 'Thenoendi004@yahoo.com', 'East Orange', '5634656098', 'Maplewood Berverage'),
('790048758', 'Anna', '', 'Versaree', '06-15-1979', 'sareeanna56@gmail.com', 'Newark', '9734561487', 'Arizona'),
('790048758', 'Sarah', 'T', 'Ignayshun', '09-10-1983', 'Signayshun234@outlook.com', 'Irvington', '5092482135', 'Hollydayinn');


INSERT INTO acccounts (bankdata_id, accopenbal, accopendate, accbal, acctype, is_Active )
VALUES
('10', '500', '12-09-2015', '20000', 'saving', 'true'),
('1', '900', '12-09-2015', '5000', 'Checking', 'true'),
('4', '10000', '12-09-2015', '2000', 'Checking', 'true'),
('8', '3000', '12-09-2015', '1200', 'Checking', 'true'),
('10', '500', '12-09-2015', '89500', 'business', 'true'),
('12', '500', '12-09-2015', '46509', 'saving', 'true'),
('10', '400', '12-09-2015', '300', 'Checking', 'true'),
('2', '1150', '12-09-2015', '709', 'saving', 'true'),
('13', '1100', '12-09-2015', '1700', 'Checking', 'true'),
('10', '600', '12-09-2015', '3036', 'Checking', 'true'),
('3', '575', '12-09-2015', '20089', 'business', 'true'),
('5', '100', '12-09-2015', '20005', 'Checking', 'true'),
('7', '250', '12-09-2015', '20007', 'saving', 'true'),
('10', '300', '12-09-2015', '20000', 'Checking', 'true'),
('9', '200', '12-09-2015', '4004', 'saving', 'true'),
('6', '100', '12-09-2015', '3674', 'Checking', 'true'),
('11', '350', '12-09-2015', '38590', 'business', 'true'),
('10', '230', '12-09-2015', '476859', 'Checking', 'true'),
('6', '10000', '12-09-2015', '504928', 'business', 'true');
