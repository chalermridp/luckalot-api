insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('first', 'รางวัลที่ 1', 'First Prize', 6000000, 1, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('three_prefix', 'เลขหน้า 3 ตัว', 'Three Prefix', 4000, 2, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('three_suffix', 'เลขท้าย 3 ตัว', 'Three Suffix', 4000, 2, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('two_suffix', 'เลขท้าย 2 ตัว', 'Two Suffix', 2000, 1, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('nearby_first', 'รางวัลข้างเคียงรางวัลที่ 1', 'Nearby First Prize', 100000, 2, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('second', 'รางวัลที่ 2', 'Second Prize', 200000, 5, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('third', 'รางวัลที่ 3', 'Third Prize', 80000, 10, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('fourth', 'รางวัลที่ 4', 'Fourth Prize', 40000, 50, 'db.migration');
insert into result_type (code, name_th, name_en, reward, amount, created_by)
values ('fifth', 'รางวัลที่ 5', 'Fifth Prize', 20000, 100, 'db.migration');

insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('first', 0, 0, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('three_prefix', 1, 2, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('three_suffix', 3, 4, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('two_suffix', 5, 5, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('nearby_first', 6, 7, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('second', 8, 12, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('third', 13, 22, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('fourth', 23, 72, 'db.migration');
insert into result_type_sanook_row_number (result_type_code, row_number_start, row_number_end, created_by)
values ('fifth', 73, 172, 'db.migration');
