CREATE DATABASE userdb;
USE userdb;


CREATE TABLE users ( 
    id INT(11) AUTO_INCREMENT NOT NULL,
    userName VARCHAR (40),
    pword VARCHAR (40),
    PRIMARY KEY (id)
)

-- find one and match on pword

