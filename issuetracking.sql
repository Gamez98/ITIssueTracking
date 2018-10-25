DROP DATABASE `issuetracking`;

CREATE DATABASE IF NOT EXISTS `issuetracking`;

USE `issuetracking`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_username` (`username`),
  UNIQUE KEY `uk_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
INSERT INTO `users` VALUES 
    (1, "Patricio Martinez", "patricio.martinez", "patricio.martinez@mail.com", "patriciomartinez"),
    (2, "Jose Rada", "jose.rada", "jose.rada@mail.com", "joserada"),
    (3, "Mariana Fernandez", "mariana.fernandez", "mariana.fernandez@mail.com", "marianafernandez");

SELECT * FROM `users`;


CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO `roles` VALUES 
	(1, 'ROLE_USER'),
    (2, 'ROLE_ADMIN');
    
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_user_roles_role_id` (`role_id`),
  CONSTRAINT `fk_user_roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_user_roles_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `user_roles` VALUES
(1, 1);

SELECT * FROM `user_roles`;

SELECT *
FROM user_roles 
INNER JOIN roles on roles.id = user_roles.role_id
INNER JOIN users on users.id = user_roles.user_id;


CREATE TABLE `requests` (
	id int primary key auto_increment,
    requested_by varchar(45) not null,
    a_group varchar(45) not null,
    phone varchar(20) not null,
    site varchar(45),
    request_day date not null,
    title varchar(45) not null,
    description varchar(1000) not null,
    status varchar(10) not null
);

insert into requests values 
	(1, "alan.gamez", "Development", "8121435465", "Monterrey", curdate(), "Instalacion de programas", "Necesito que me instalen Mysql", "open"),
    (2, "alan.gamez", "Development", "8121435465", "Monterrey", curdate(), "Instalacion de programas", "Necesito que me instalen Visual Studios", "open"),
    (3, "alan.gamez", "Development", "8121435465", "Monterrey", curdate(), "Accesos a computadora", "Se bloqueo mi cuenta a la computadora", "closed"),
    (4, "miguel.pineda", "Support", "8165768798", "Aguascalientes", curdate(), "Necesito que me cambien mi silla", "Mi silla se rompio, necesito una nueva", "open"),
    (5, "miguel.pineda", "Support", "8165768798", "Aguascalientes", curdate(), "Necesito instalacion de programas", "Necesito que me instalen visual studio code", "closed");

create table user_requests(
	id int primary key auto_increment,
    user_id bigint,
    request_id int,
    constraint fk_UserRequest foreign key (user_id) references issuetracking.users(`id`),
    constraint fk_RequestUser foreign key (request_id) references issuetracking.requests(`id`)
);

insert into user_requests values 
	(1, 1, 1),
    (2, 1, 2),
    (3, 1, 3),
    (4, 2, 4),
    (5, 2, 5);

create table site (
	id int primary key auto_increment,
    site varchar(45) not null
);

insert into site values 
	(1, "Monterrey"),
    (2, "Coahuila"),
    (3, "Aguascalientes");

select * from site;

create table priority(
	id int primary key auto_increment,
    priority varchar(20) not null
);

insert into priority values 
	(1, "Low"),
    (2, "Medium"),
    (3, "High");

create table groupp(
	id int primary key auto_increment,
    a_group varchar(45) not null 
);

insert into groupp values 
	(1, "Development"),
    (2, "Support"),
    (3, "RRHH"),
    (4, "Staff"),
    (5, "Infraestructure"),
    (6, "Security");

    