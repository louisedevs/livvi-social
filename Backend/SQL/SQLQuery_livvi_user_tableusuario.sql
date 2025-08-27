CREATE DATABASE Livvi;
USE Livvi;
CREATE TABLE usuario (
id_user  INT PRIMARY KEY IDENTITY(1,1) NOT NULL ,
email_user  VARCHAR(150) UNIQUE NOT NULL,
password_user VARCHAR(150) NOT NULL
);
INSERT INTO usuario (email_user, password_user)
VALUES	('meuemail@exemplo.com', 'senhaSuperSecreta123');

SELECT * 
FROM usuario;
--OLHAR NO SEU GEMINI E CONTINUAR A CRIAÇÃO DA TABELA NOME E DEPOIS VOLTAR E IR PARA A TABELA POST--