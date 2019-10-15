DROP DATABASE IF EXISTS name_that_baby_db;
CREATE DATABASE name_that_baby_db;

USE name_that_baby_db;

CREATE TABLE camNames(
    id INT AUTO_INCREMENT NOT NULL,
    year YEAR NOT NULL,
    name VARCHAR(30) NOT NULL,
    percentage FLOAT(8,7),
    sex VARCHAR(30),
    PRIMARY KEY(id)
);


CREATE TABLE chadNames(
    id INT AUTO_INCREMENT NOT NULL,
    yearOfBirth YEAR NOT NULL,
    sex VARCHAR (255) NOT NULL,
    ethnicity VARCHAR (255) NOT NULL,
    name VARCHAR (255) NOT NULL,
    occurences INT NOT NULL,
    nameRank INT NOT NULL,
    PRIMARY KEY (id)
)

