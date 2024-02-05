CREATE TABLE `topmed_project`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(200) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `tipo_plano` VARCHAR(50) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));

insert into usuario (nome_usuario, data_nascimento, tipo_plano,username, senha) values ("Maria Isabel de Sousa Carneiro", '1994-11-11', "Basico", "maria1","senha1");

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

insert into dados_login (username, senha, dia_hora_login, status_login,numero_tentativas, idusuario) values ("maria1", "senha1", "2024-01-30 11:00:00","sucesso",0, 1);

SELECT
    u.idusuario,
    u.nome_usuario,
    d.dia_hora_login,
    d.status_login
FROM
    topmed_project.usuario u
JOIN
    topmed_project.dados_login d ON u.idusuario = d.idusuario
WHERE
    d.dia_hora_login >= NOW() - INTERVAL 2 HOUR;
    
select * from dados_login;
select * from usuario;