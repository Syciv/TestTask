--liquibase formatted sql

--changeset liquibase:1

CREATE TABLE filials(
    id serial NOT NULL PRIMARY KEY,
    name varchar
);

CREATE TABLE posts(
    id serial NOT NULL PRIMARY KEY,
    name varchar
);

CREATE TABLE employees(
    id serial NOT NULL PRIMARY KEY,
    postid integer,
    name varchar,
    filialid integer,
    chiefId integer,
    FOREIGN KEY (chiefId) REFERENCES employees(id),
    FOREIGN KEY (filialid) REFERENCES filials(id),
    FOREIGN KEY (postid) REFERENCES posts(id)
);

CREATE TABLE Tasks(
    id serial NOT NULL PRIMARY KEY,
    priority integer,
    description text,
    employeeId integer,
    FOREIGN KEY (employeeId) REFERENCES employees(id)
);

--changeset liquibase:2

INSERT INTO filials(name) values ('Северный'), ('Южный'), ('Западный'), ('Восточный');
INSERT INTO posts(name) values ('Инженер'), ('Механик'), ('Медик'), ('Капитан');

--changeset liquibase:3
ALTER TABLE Tasks ADD CONSTRAINT priority_check CHECK (priority > 0 AND priority < 10);
