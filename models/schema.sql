CREATE DATABASE userdb;
USE userdb;


CREATE TABLE users ( 
    id INT(11) AUTO_INCREMENT NOT NULL,
    email VARCHAR (40),
    pword VARCHAR (40),
    PRIMARY KEY (id)
)

