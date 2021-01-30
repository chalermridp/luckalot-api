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

create table result
(
	id serial not null primary key,
	date date not null,
	result_type_code varchar(30) not null,
	value varchar(10) not null,
	is_active boolean not null default true,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	updated_by varchar(50) null,
	updated_at timestamp null
);

create index result_idx on result(date, value);

create table result_date
(
	date date not null primary key,
	is_active boolean not null default false,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	updated_by varchar(50) null,
	updated_at timestamp null
);

create table result_import_schedule
(
	date date not null primary key,
	is_completed boolean not null default false,
	is_active boolean not null default true,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	updated_by varchar(50) null,
	updated_at timestamp null
);

create table result_import_log
(
	date date not null,
	timestamp timestamp not null,
	is_success boolean not null default false,
	total_records int not null default 0,
	error_information varchar(500) null default null,
	remark varchar(500) null default null,
	created_by varchar(50) not null,
	created_at timestamp not null default current_timestamp,
	primary key(date, timestamp)
);