# TOPMED

## Adicionar Usuário:
Rota: POST /api/usuario/cadastrar
Descrição: Adicionando os dados do usuário para cadastra-lo no sistema. 
Exemplo de request body:

{
    "nomeUsuario": "Maria Isabel de Sousa Carneiro",
    "dataNascimento": "1994-11-11",
    "tipoPlano": "Basico",
    "username": "maria1",
    "senha":"senha1"
}

Exemplo de Resposta de Sucesso:
"Usuario adicionado com sucesso. ID: 8"

Exemplo de Resposta de Erro:
Erro ao cadastrar usuário: could not execute statement; SQL [n/a]; constraint [usuario.username_UNIQUE]; nested exception is org.hibernate.exception.ConstraintViolationException: could not execute statement


## Adicionar Login
Route: POST /api/usuario/login
Description: Nesta rota é possivel verificar todos os dados do usuário antes de cadastrar o login no banco de dados e realizar o login do usuário na plataforma.

{
    "username": "maria1",
    "senha": "senha2"
}

Exemplo de Resposta de Sucesso:
{"success":"Login realizado com sucesso"}

Exemplo de Resposta de Erro:
{"error":"Usuário bloqueado devido a múltiplas tentativas incorretas."}


## Sobre a API
O backend desta aplicação foi desenvolvido em java e o frontend foi desenvolvido em React, utilizando CSS.


## Banco de Dados
O Banco de dados foi criado em MySQL

CREATE SCHEMA `topmed_project` ;

CREATE TABLE `topmed_project`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(200) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `tipo_plano` VARCHAR(50) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));

CREATE TABLE `topmed_project`.`dados_login` (
  `iddados_login` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `dia_hora_login` DATETIME NOT NULL,
  `status_login` VARCHAR(10) NOT NULL,
  `numero_tentativas` INT NULL,
  `idusuario` INT NOT NULL,
  PRIMARY KEY (`iddados_login`),
  INDEX `idusuario_idx` (`idusuario` ASC) VISIBLE,
  CONSTRAINT `idusuario`
    FOREIGN KEY (`idusuario`)
    REFERENCES `topmed_project`.`usuario` (`idusuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


## POSTMAN

Chamadas criadas no POSTMAN para testes.

# POST - Cadastrar Usuário

curl --location 'http://localhost:8080/api/usuario/cadastrar' \
--header 'Content-Type: application/json' \
--data '{
    "nomeUsuario": "Debora de Sousa Carneiro",
    "dataNascimento": "1990-12-24",
    "tipoPlano": "Basico",
    "username": "debora1",
    "senha":"senha3"
}'

# POST - Cadastrar Login

curl --location 'http://localhost:8080/api/usuario/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "maria1",
    "senha": "senha2"
}'


