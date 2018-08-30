DROP DATABASE IF EXISTS usuariodb;
CREATE DATABASE usuariodb;

--\c usuariodb;

CREATE TABLE usuarios (
  correo VARCHAR PRIMARY KEY,
  password VARCHAR,
);

INSERT INTO usuarios (correo, password)
  VALUES ('abc@gmail.com', '123');