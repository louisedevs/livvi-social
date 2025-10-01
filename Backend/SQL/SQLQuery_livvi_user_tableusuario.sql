-- Garante que estamos no banco de dados certo
USE Livvi;
GO -- Barreira: Termina este comando antes de continuar

-- Comando para apagar a tabela antiga, se ela existir
DROP TABLE IF EXISTS usuario;
GO -- Barreira: Termina este comando antes de continuar

-- Comando para criar a tabela nova, com a coluna do nome
CREATE TABLE usuario (
    id_user INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    nome_user VARCHAR(100) NOT NULL,
    email_user VARCHAR(150) UNIQUE NOT NULL,
    password_user VARCHAR(150) NOT NULL
);
GO -- Barreira: Termina este comando antes de continuar

-- Comando para inserir os dados na tabela que ACABOU de ser criada
INSERT INTO usuario (nome_user, email_user, password_user)
VALUES ('Louise Teste', 'meuemail@exemplo.com', 'senhaSuperSecreta123');
GO -- Barreira: Termina este comando antes de continuar

-- Comando final para ver o resultado
SELECT * FROM usuario;
GO