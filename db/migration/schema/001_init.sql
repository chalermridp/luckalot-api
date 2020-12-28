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

create table result_type_sanook_row_number
(
	result_type_code varchar(30) primary key,
	row_number_start int not null,
	row_number_end int not null,
	is_active boolean not null default true,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	updated_by varchar(50) null,
	updated_at timestamp null
);
