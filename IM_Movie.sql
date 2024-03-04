---------------------------------------파이널 플젝

CREATE TABLE mvc_customer_tbl(
    No              VARCHAR2(20)       PRIMARY KEY,
    email           VARCHAR2(50)       NOT NULL,
    name            VARCHAR2(20)       NOT NULL,
    password        VARCHAR2(30)       NOT NULL,
    hp              VARCHAR2(20)       NOT NULL,
    birthday        DATE               NOT NULL,
    regdate         DATE               DEFAULT sysdate,
    show            VARCHAR2(1)        DEFAULT 'n'
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