create database luckalot;

create table result_type
(
	code varchar(30) primary key,
	name_th varchar(100) not null,
	name_en varchar(100) null,
	reward int not null,
	amount int not null,
	is_active boolean not null default true,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	updated_by varchar(50) null,
	updated_at timestamp null
);
