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




------------------------------------------------------------------------------------------------------------------------------------------------------------
-- 가연

-- 스토어 상품
DROP TABLE IM_STORE_ITEM CASCADE constraints;
CREATE TABLE IM_STORE_ITEM (
	item_code 	        number(10) 	Not null, --상품코드 
	item_type 	        varchar(20) Not null, --상품종류 
    item_name 	        varchar(50) Not null, --상품명 
    item_detail 	    varchar(50) Not null, --상품구성 
    item_price 	        number(10)  Not null, --판매금액 
    item_sale_price 	number(10)  Not null, --할인금액 
    item_image 	        varchar(255)Not null, --상품사진 
    item_exp 	        varchar(50)  Not null --유효기간 
);

INSERT INTO IM_STORE_ITEM 
VALUES((SELECT NVL(MAX(item_code)+1, 1) FROM IM_STORE_ITEM), '패키지', 'IM봄_패키지', '2D 일반관람권 2매', 26000, 22000, '/img/', '온라인 관람권 6 개월');

UPDATE IM_STORE_ITEM
   SET item_type = '관람권',
       item_name = '일반 관람권',
       item_detail = '일반관람권 1매',
       item_price = 13000,
       item_sale_price = 13000,
       item_image = '/img/',
       item_exp = '온라인 관람권 24 개월'
 WHERE item_code = 1;

DELETE FROM IM_STORE_ITEM
WHERE item_code = 1;

SELECT * FROM  IM_STORE_ITEM
WHERE item_code = 1;

COMMIT;

-- 스토어 선물하기
DROP TABLE IM_STORE_GIFT CASCADE constraints;
CREATE TABLE IM_STORE_GIFT (
    gift_num        number(20) Not null,      --선물코드 PK
    gift_recipient  varchar(50) Not null,      --선물받는분
    gift_name       varchar(20) Not null,     --선물하는분
    gift_content    varchar(255) Not null,     --메세지 입력
    gift_count      number(20) Not null       --수량
);

INSERT INTO IM_STORE_GIFT 
VALUES((SELECT NVL(MAX(gift_num)+1, 1) FROM IM_STORE_GIFT), 'kim@gmail.com', '홍길동', '선물드립니다.', 1);

UPDATE IM_STORE_GIFT
   SET gift_recipient = 'hong@naver.com',
       gift_name = '김하나',
       gift_content = '감사합니다.',
       gift_count = 1
 WHERE gift_num = 1;

DELETE FROM IM_STORE_GIFT
WHERE gift_num = 1;

SELECT * FROM  IM_STORE_GIFT
WHERE gift_num = 1;

COMMIT;

-- 스토어 주문 테이블
DROP TABLE IM_STORE_ORDER CASCADE constraints;
CREATE TABLE IM_STORE_ORDER (
    order_code  varchar(20) Not null, -- 주문번호 PK
    c_email  varchar(20) Not null     --회원ID Fk
);

INSERT INTO IM_STORE_ORDER 
VALUES((SELECT NVL(MAX(order_code)+1, 1) FROM IM_STORE_ORDER), 'hong@naver.com');


DELETE FROM IM_STORE_ORDER
WHERE order_code = 1;

SELECT * FROM  IM_STORE_ORDER
WHERE order_code = 1;


COMMIT;

-- 스토어 주문 상세 테이블
DROP TABLE IM_STORE_ORDER_DETAIL CASCADE constraints;
CREATE TABLE IM_STORE_ORDER_DETAIL (
     detail_code         number(20) Not null,  --쿠폰코드  pk 
     order_code     number(20) Not null,  --주문번호 Fk
     item_name       varchar(20) Not null,  --상품명
     detail_price    number(20) Not null,   --결제금액
     detail_qty      number(20) Not null,   --수량
     detail_regDate DATE  DEFAULT sysdate  --등록일
);

INSERT INTO IM_STORE_ORDER_DETAIL 
VALUES((SELECT NVL(MAX(detail_code)+1, 1) FROM IM_STORE_ORDER_DETAIL), 1, 'IM봄_패키지', 22000, 1, sysdate);

UPDATE IM_STORE_ORDER_DETAIL
   SET item_name = '일반 관람권',
       detail_price = 13000,
       detail_qty = 2
 WHERE detail_code = 1;

DELETE FROM IM_STORE_ORDER_DETAIL
WHERE detail_code = 1;

SELECT * FROM  IM_STORE_ORDER_DETAIL
WHERE detail_code = 1;

COMMIT;