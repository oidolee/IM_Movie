---------------------------------------파이널 플젝
-- 커넥션
-- ID : IM_Movie
-- PW : movie


CREATE TABLE IM_Customer(
    IC_No              VARCHAR2(20)       PRIMARY KEY,
    IC_email           VARCHAR2(50)       NOT NULL,
    IC_name            VARCHAR2(20)       NOT NULL,
    IC_password        VARCHAR2(30)       NOT NULL,
    IC_hp              VARCHAR2(20)       NOT NULL,
    IC_birthday        DATE               NOT NULL,
    IC_address		  VARCHAR2(100)		 NOT NULL,
    IC_regdate         DATE               DEFAULT sysdate,
    IC_show            VARCHAR2(1)        DEFAULT 'y'
);
DROP TABLE IM_Customer;
SELECT * FROM IM_Customer;

INSERT INTO IM_Customer(IC_No, IC_email, IC_name, IC_password, IC_hp, IC_birthday, IC_address)
    VALUES((SELECT NVL(MAX(IC_No)+1, 1) FROM mvc_customer_tbl), '55', '55', '55', '010', '2024-05-15',''); 


INSERT INTO IM_Customer(IC_email, IC_name, IC_password, IC_hp, IC_birthday, IC_address)
 VALUES('12344', '1234', '1234', '01055554444', '19951204', '서울시 강남구') ;

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