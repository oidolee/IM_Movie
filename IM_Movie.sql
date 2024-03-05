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


-- 민진 시작

DROP TABLE im_parking;
CREATE TABLE im_parking (
    ip_no NUMBER PRIMARY KEY,
    ip_block VARCHAR(2) NOT NULL,
    ip_number NUMBER(20) NOT NULL,
    ip_carnumber VARCHAR(20) NOT NULL,
    ip_inoutcheck CHAR(1) NOT NULL, -- 예약 체크
    ip_client VARCHAR(50) NOT NULL,
    ip_regdate TIMESTAMP DEFAULT sysdate,
    reservation_id NUMBER,
    FOREIGN KEY (reservation_id) REFERENCES reservation(res_id)
);
insert into im_parking 
    values( nvl( (select max(ip_no) from im_parking)+1,1 ), 'A', 1, '경기51더4433', 'Y' ,'manajini', '2024-03-05 16:00:00', 1 );
    
update im_parking
set ip_block = 'B'
where ip_no = 1;

delete from im_parking  where ip_no  = 1;
commit;


-- 민진 끝