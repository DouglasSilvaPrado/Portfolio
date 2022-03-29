create sequence hibernate_sequence start 1 increment 1;
create table tb_project (id int8 not null, code varchar(255), demo varchar(255), deploy varchar(255), description varchar(255), gif varchar(255), image varchar(255), name varchar(255), tools varchar(255), type varchar(255), primary key (id));
