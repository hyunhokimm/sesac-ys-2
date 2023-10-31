use practice;

create table user(

id int not null primary key auto_increment,
userId varchar(10) not null,
password varchar(20) not null,
username varchar(10) not null)
;
-- drop table user;
select * from user;