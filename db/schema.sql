CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE burgers(
	id integer(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
)