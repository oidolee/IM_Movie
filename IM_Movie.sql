---------------------------------------파이널 플젝

CREATE TABLE mvc_customer_tbl(
    c_No              VARCHAR2(20)       PRIMARY KEY,
    c_email           VARCHAR2(50)       NOT NULL,
    c_name            VARCHAR2(20)       NOT NULL,
    c_password        VARCHAR2(30)       NOT NULL,
    c_hp              VARCHAR2(20)       NOT NULL,
    c_birthday        DATE               NOT NULL,
    c_regdate         DATE               DEFAULT sysdate,
    c_show            VARCHAR2(1)        DEFAULT 'y'
);
DROP TABLE mvc_customer_tbl;
SELECT * FROM mvc_customer_tbl;

INSERT INTO mvc_customer_tbl(No, email, name, password, hp, birthday)
    VALUES((SELECT NVL(MAX(No)+1, 1) FROM mvc_customer_tbl), '55', '55', '55', '010', '2024-05-15'); 


INSERT INTO mvc_customer_tbl(email, name, password, hp, birthday)
 VALUES('12344', '1234', '1234', '01055554444', '19951204') ;

COMMIT;
-------------------------------------------------------------------------
DROP TABLE mvc_sample_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_sample_tbl(
   id      number(5)    PRIMARY KEY,
   name    varchar2(50) NOT NULL,
   brand   varchar2(50) NOT NULL,
   madein  varchar2(50) NOT NULL,
   price   number(9)    NOT NULL
);
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_1', 'brand_1', 'madein_1', 1 );
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_2', 'brand_2', 'madein_2', 2 );
commit;    
SELECT * FROM mvc_sample_tbl;


----------------------------------------------------------------------------
DROP TABLE mvc_sample_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_sample_tbl(
   id      number(5)    PRIMARY KEY,
   name    varchar2(50) NOT NULL,
   brand   varchar2(50) NOT NULL,
   madein  varchar2(50) NOT NULL,
   price   number(9)    NOT NULL
);
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_1', 'brand_1', 'madein_1', 1 );
insert into mvc_sample_tbl 
    values( nvl( (select max(id) from mvc_sample_tbl)+1 ,1), 'name_2', 'brand_2', 'madein_2', 2 );
commit;    
SELECT * FROM mvc_sample_tbl;

---------------------------------------------------------------
DROP TABLE mvc_Reservation_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_Reservation_tbl(
   Res_id           NUMBER          PRIMARY KEY,
   c_email          VARCHAR2(50)    NOT NULL,
   THEATER_ID       VARCHAR2(50)    NOT NULL,
   SCREEN_ID        VARCHAR2(50)    NOT NULL,
   MOV_AGE          VARCHAR2(255)   NOT NULL,
   Res_movieDate    Date            DEFAULT sysdate,
   Res_movieID      VARCHAR2(50)    NOT NULL,
   Res_movieName    VARCHAR2(100)   NOT NULL,
   Res_movieTime    VARCHAR2(100)   NOT NULL,
   Res_seat         VARCHAR2(50)    NOT NULL,
   Res_count        NUMBER          NOT NULL,
   Res_ticketPrice  NUMBER          NOT NULL,
   Res_sysdate      DATE            DEFAULT sysdate,
   Res_check        CHAR(1)         DEFAULT 'n'
);

select * from mvc_Reservation_tbl;

insert into mvc_Reservation_tbl(Res_id, c_email, THEATER_ID, SCREEN_ID, MOV_AGE, Res_movieDate, Res_movieID, Res_movieName, Res_movieTime, Res_seat, Res_count, Res_ticketPrice, Res_sysdate, Res_check)
values ((SELECT NVL(MAX(Res_id)+1, 1) FROM mvc_Reservation_tbl), 'aa', 'aa', 'aa', 'aa', sysdate, 'aa', 'aa', 'aa', 'aa', 5, 5, sysdate, 'n');

update mvc_Reservation_tbl
set Res_check='y'
where Res_id=1;

delete from mvc_Reservation_tbl
where Res_id=1;

commit;

DROP TABLE mvc_PayMent_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_PayMent_tbl(
   Pay_id           NUMBER          PRIMARY KEY,
   Res_id           NUMBER          NOT NULL,
   c_email          VARCHAR2(50)    NOT NULL,
   c_grade          VARCHAR2(50)    NOT NULL,
   Pay_method       VARCHAR2(50)    NOT NULL,
   Pay_payCompany   VARCHAR2(50)    NOT NULL,
   Res_movieName    VARCHAR2(100)   NOT NULL,
   Pay_cardNum      VARCHAR2(100)   NOT NULL,
   Pay_tel          VARCHAR2(50)    NOT NULL,
   Pay_sysdate      DATE            DEFAULT sysdate,
   Pay_check        CHAR(1)         DEFAULT 'n'
);

select * from mvc_PayMent_tbl;

insert into mvc_PayMent_tbl(Pay_id, Res_id, c_email, c_grade, Pay_method, Pay_payCompany, Res_movieName, Pay_cardNum, Pay_tel, Pay_sysdate, Pay_check)
values ((SELECT NVL(MAX(Pay_id)+1, 1) FROM mvc_PayMent_tbl), 1, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', sysdate, 'n');

update mvc_PayMent_tbl
set Pay_check='y'
where Res_id=1;

delete from mvc_PayMent_tbl
where Res_id=1;

commit;

DROP TABLE mvc_Seat_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_Seat_tbl(
   St_id            NUMBER          PRIMARY KEY,
   THEATER_ID       VARCHAR2(50)    NOT NULL,
   SCREEN_ID        VARCHAR2(50)    NOT NULL,
   St_seatGroup     VARCHAR2(50)    NOT NULL,
   St_num           VARCHAR2(50)    NOT NULL,
   St_lineNum       VARCHAR2(50)    NOT NULL,
   St_check         CHAR(1)         DEFAULT 'n'
);

select * from mvc_Seat_tbl;

insert into mvc_Seat_tbl(St_id, THEATER_ID, SCREEN_ID, St_seatGroup, St_num, St_lineNum, St_check)
values ((SELECT NVL(MAX(St_id)+1, 1) FROM mvc_Seat_tbl), 'aa', 'aa', 'aa', 'aa', 'aa', 'n');

update mvc_Seat_tbl
set St_check='y'
where St_id=1;

delete from mvc_Seat_tbl
where St_id=1;

commit;

DROP TABLE mvc_Discount_tbl CASCADE CONSTRAINTS;
CREATE TABLE mvc_Discount_tbl(
   Dc_num            NUMBER          PRIMARY KEY,
   Dc_mainTitle      VARCHAR2(50)    NOT NULL,
   Dc_subTitle       VARCHAR2(50),
   Dc_mainImg        VARCHAR2(255)   NOT NULL,
   Dc_subImg         VARCHAR2(255)   NOT NULL,
   Dc_show           CHAR(1)         DEFAULT 'n'
);

select * from mvc_Discount_tbl;

insert into mvc_Discount_tbl(Dc_num, Dc_mainTitle, Dc_subTitle, Dc_mainImg, Dc_subImg, Dc_show)
values ((SELECT NVL(MAX(Dc_num)+1, 1) FROM mvc_Discount_tbl), 'aa', 'aa', 'aa', 'aa', 'n');

update mvc_Discount_tbl
set Dc_show='y'
where Dc_num=1;

delete from mvc_Discount_tbl
where Dc_num=1;

commit;
