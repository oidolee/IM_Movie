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
----------------------------------------------------------------------------------
-------------------[김창해 - 마이페이지, 이벤트 페이지]------------------------------
-- 1:1 문의
DROP TABLE IM_BOARD CASCADE CONSTRAINTS;
CREATE TABLE IM_BOARD(
ONE_ID          NUMBER          PRIMARY KEY,
C_EAMIL         VARCHAR2(50)    NOT NULL,
CUS_NAME        VARCHAR2(50)    NOT NULL,
IB_TYPE         VARCHAR2(50)    NOT NULL,
IB_TYPE_DETAIL  VARCHAR2(50)    NOT NULL,
IB_TITLE        VARCHAR2(50)    NOT NULL,
IB_CONTENT      CLOB            NOT NULL,
IB_DATE         DATE            DEFAULT sysdate,
show            CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_BOARD;


insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(1, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(2, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
insert into IM_BOARD(ONE_ID, C_EAMIL, CUS_NAME, IB_TYPE, IB_TYPE_DETAIL, IB_TITLE, IB_CONTENT)
values(3, 'asdf@asdf.com', '공주', '영화관', '영화관 좌석', '영화관 좌석이 불편해요', '영화관 좌석이 불편해요 너무너무.');
commit;

UPDATE IM_BOARD
   SET IB_TYPE = '스토어'
 WHERE c_eamil = 'asdf@asdf.com';

DELETE FROM IM_BOARD
WHERE ONE_ID = 1;
-----------------------------------------------------------------------------------
-- 1:1 문의 답변 테이블
DROP TABLE IM_BOARD_ANSWER CASCADE CONSTRAINTS;
CREATE TABLE IM_BOARD_ANSWER(
ONE_ID_ANSWER   NUMBER          PRIMARY KEY,
IBA_TITLE        VARCHAR2(50)    NOT NULL,
IBA_CONTENT      CLOB            NOT NULL,
IBA_DATE         DATE            DEFAULT sysdate
);

SELECT * FROM IM_BOARD_ANSWER;

INSERT INTO IM_BOARD_ANSWER
VALUES(1, '영화관 좌석이 불편해요', '죄송해요 어쩔 수 없어요', sysdate);

INSERT INTO IM_BOARD_ANSWER
VALUES(2, '영화관 좌석이 불편해요2', '죄송해요 어쩔 수 없어요', sysdate);

INSERT INTO IM_BOARD_ANSWER
VALUES(3, '영화관 좌석이 불편해요3', '죄송해요 어쩔 수 없어요', sysdate);

COMMIT;

UPDATE IM_BOARD_ANSWER
   SET IBA_CONTENT = '바꿔줄 수 없어요'
 WHERE IBA_TITLE = '영화관 좌석이 불편해요';

DELETE FROM IM_BOARD_ANSWER
WHERE ONE_ID_ANSWER = 2;
-----------------------------------------------------------------------------------

-- 이벤트 페이지 테이블
DROP TABLE IM_EVENT CASCADE CONSTRAINTS;
CREATE TABLE IM_EVENT(
e_ID          NUMBER          PRIMARY KEY,
e_name        VARCHAR2(50)    NOT NULL,
e_category    VARCHAR2(50)    NOT NULL,
e_board       VARCHAR2(50)    NOT NULL,
e_date        DATE            NOT NULL,
e_regDate     DATE            DEFAULT sysdate,
show          CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_EVENT;


insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(1, '이벤트1', '쿠폰', '쿠폰받자', sysdate);
insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(2, '이벤트2', '시사회', '시사회가자', sysdate);
insert into IM_EVENT(e_ID, e_name, e_category, e_board, e_date)
values(3, '이벤트3', '시사회', '시사회', sysdate);
commit;

UPDATE IM_EVENT
   SET e_name = '가자이벤트'
 WHERE e_ID = '1';

DELETE FROM IM_EVENT
WHERE e_ID = 1;


-----------------------------------------------------------------------------------
-- 쿠폰 테이블
DROP TABLE IM_COUPON CASCADE CONSTRAINTS;
CREATE TABLE IM_COUPON(
ic_num          NUMBER          PRIMARY KEY,
ic_name         VARCHAR2(50)    NOT NULL,
ic_category     VARCHAR2(50)    NOT NULL,
ic_sale         NUMBER          NOT NULL,
ic_useDate      DATE            NOT NULL,
ic_regDate      DATE            DEFAULT sysdate,
ic_status       CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_COUPON;


insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(1, '쿠폰1', '영화', 10000, sysdate);
insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(2, '쿠폰2', '스토어', 10000, sysdate);
insert into IM_COUPON(ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values(3, '쿠폰3', '음료', 10000, sysdate);
commit;

UPDATE IM_COUPON
   SET ic_name = '쿠쿠폰폰'
 WHERE ic_num = 1;

DELETE FROM IM_COUPON
WHERE ic_num = 3;
-----------------------------------------------------------------------------------
-- 고객 쿠폰 테이블
DROP TABLE IM_CUS_COUPON CASCADE CONSTRAINTS;
CREATE TABLE IM_CUS_COUPON(
c_email         VARCHAR2(50)    PRIMARY KEY, -- PK,FK
ic_num          NUMBER          NOT NULL, -- FK
ic_name         VARCHAR2(50)    NOT NULL, 
ic_category     VARCHAR2(50)    NOT NULL,
ic_sale         NUMBER          NOT NULL,
ic_useDate      DATE            NOT NULL,
ic_regDate      DATE            DEFAULT sysdate,
ic_status       CHAR(1)         DEFAULT 'y'
);

SELECT * FROM IM_CUS_COUPON;


insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('asdf@asdf.com', 1, '쿠폰1', '영화', 10000, sysdate);
insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('qwer@asdf.com', 2, '쿠폰2', '영화', 10000, sysdate);
insert into IM_CUS_COUPON(c_email, ic_num, ic_name, ic_category, ic_sale, ic_useDate)
values('zxcv@asdf.com', 3, '쿠폰3', '영화', 10000, sysdate);
commit;

UPDATE IM_CUS_COUPON
   SET ic_name = '쿠쿠폰폰'
 WHERE ic_num = 1;

DELETE FROM IM_CUS_COUPON
WHERE ic_num = 3;

-----------------------------------------------------------------------------------
-- 포인트 테이블
DROP TABLE IM_POINT CASCADE CONSTRAINTS;
CREATE TABLE IM_POINT(
C_EMAIL         VARCHAR2(50)    PRIMARY KEY,
ip_usePoint     NUMBER          NOT NULL,
ip_havePoint    NUMBER          NOT NULL
);

SELECT * FROM IM_POINT;


insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('asdf@asdf.com', 10000, 30000);
insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('qwer@asdf.com', 10000, 30000);
insert into IM_POINT(c_email, ip_usePoint, ip_havePoint)
values('zxcv@asdf.com', 10000, 30000);
commit;

UPDATE IM_POINT
   SET ip_usePoint = 15000
 WHERE c_email = 'asdf@asdf.com';

DELETE FROM IM_POINT
WHERE c_email = 'zxcv@asdf.com';

-----------------------------------------------------------------------------------



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