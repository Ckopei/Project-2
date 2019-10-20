
USE name_that_baby_db;



CREATE TABLE chadNames(
    id INT AUTO_INCREMENT NOT NULL,
    Year_of_birth INT NOT NULL,
    sex TEXT NOT NULL,
    ethnicity TEXT NOT NULL,
    name TEXT NOT NULL,
    occurences INT NOT NULL,
    name_rank INT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
)

