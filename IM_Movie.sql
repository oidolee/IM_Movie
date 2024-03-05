-- [ 영화 TABLE ]-----------
 DROP TABLE IM_MOVIES CASCADE CONSTRAINTS;
 CREATE TABLE IM_MOVIES(
    MOVIE_ID        NUMBER     PRIMARY KEY,          -- 영화코드(PK)
    MOV_TITLE       VARCHAR2(50)    NOT NULL,            -- 제목
    MOV_PART        NUMBER      NOT NULL,            --파트 나누기
    MOV_TRAILER     CLOB            NOT NULL,            -- 유튭트레일러
    MOV_IMAGE       CLOB            NOT NULL,            --이미지
    MOV_CONTENTS    CLOB            NOT NULL,            --상세내용
    MOV_DATE        DATE            NOT NULL,            -- 개봉일
    MOV_VISITOR     NUMBER     NOT NULL,            -- 관람객수
    MOV_AGE         NUMBER      NOT NULL,             -- 연령제한 
    MOV_TIME        VARCHAR2(50)    NOT NULL               --상영시간
 );
 ALTER TABLE IM_MOVIES
  ADD show CHAR(1)DEFAULT 'y';
  
  SELECT * FROM IM_MOVIES;
  
  --파트1
  INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('1','파묘','1','1','1','내용1','2024/01/01','100','15','134분');
    
  INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('2','듄:파트2','1','1','1','내용2','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('3','건국전쟁','1','1','1','내용3','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('4','윙카','1','1','1','내용4','2024/01/01','100','15','134분');
    
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('5','소풍','1','1','1','내용5','2024/01/01','100','15','134분');
    
    --파트 2
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('6','가여운 것들','2','1','1','내용6','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('7','패스트 라이브즈','2','1','1','내용7','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('8','벙커 게임','2','1','1','내용8','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('9','예수는 역사다','2','1','1','내용9','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('10','생츄어리2:쿼카가 너무해','2','1','1','내용10','2024/01/01','100','15','134분');
    
    --파트 3
    INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('6','가여운 것들','2','1','1','내용6','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('7','패스트 라이브즈','2','1','1','내용7','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('8','벙커 게임','2','1','1','내용8','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('9','예수는 역사다','2','1','1','내용9','2024/01/01','100','15','134분');
    
     INSERT INTO IM_MOVIES(MOVIE_ID,MOV_TITLE,MOV_PART,MOV_TRAILER,MOV_IMAGE,MOV_CONTENTS,MOV_DATE,MOV_VISITOR,MOV_AGE,MOV_TIME)
    VALUES('10','생츄어리2:쿼카가 너무해','2','1','1','내용10','2024/01/01','100','15','134분');
    
    UPDATE IM_MOVIES SET MOV_TITLE = '택시' WHERE MOVIE_ID = '1';
    
    DELETE IM_MOVIES WHERE MOVIE_ID = '1';
    
    
    commit;
  
--------------------------------------------------------------------------------

--관람평 테이블

DROP TABLE IM_REVIEW CASCADE CONSTRAINTS;
CREATE TABLE IM_REVIEW(  
    REVIEW_NUM      NUMBER          PRIMARY KEY,       -- 후기코드(PK)
    MOVIE_ID        VARCHAR2(50)    NOT NULL,          -- 영화코드(FK)
    CUS_ID          VARCHAR2(50)    NOT NULL,          -- 회원ID(FK)
    REVIEW_STAR     NUMBER          NOT NULL,          -- 후기별점
    REVIEW_CONTENTS CLOB            NOT NULL,          -- 후기내용
    REVIEW_DATE     DATE            NOT NULL           -- 작성일
);

--------------------------------------------------------------------------------


--영화좋아요 테이블
DROP TABLE IM_LIKE CASCADE CONSTRAINTS;
CREATE TABLE IM_LIKE(  
    LIKE_ID      NUMBER          PRIMARY KEY,        -- 좋아요코드(PK)
    MOVIE_ID     VARCHAR2(50)    NOT NULL,           -- 영화코드(FK)
    CUS_ID       VARCHAR2(50)    NOT NULL,           -- 회원ID(FK)
    LIKE_DATE    DATE            NOT NULL            -- 좋아요날짜
);

--------------------------------------------------------------------------------

--상영시간표 테이블
DROP TABLE MOVIE_TIME CASCADE CONSTRAINTS;
CREATE TABLE MOVIE_TIME(  
    SCHEDULE_ID     NUMBER          PRIMARY KEY,        -- 일정코드(PK)
    SCREEN_ID       NUMBER          NOT NULL,           -- 상영관코드(FK)
    THEATER_ID      VARCHAR2(50)    NOT NULL,           -- 영화관코드(FK)
    MOVIE_ID        VARCHAR2(50)    NOT NULL,           -- 영화코드(FK)
    TIME_DATE       DATE            NOT NULL,           -- 날짜
    START_TIME      TIMESTAMP       NOT NULL,           -- 시작시간
    END_TIME        TIMESTAMP       NOT NULL,           -- 종료시간
    TIME_CODE       VARCHAR2(10)    NOT NULL            -- 위치코드
);

--------------------------------------------------------------------------------

--지역 테이블
DROP TABLE IM_PLACE  CASCADE CONSTRAINTS;
CREATE TABLE IM_PLACE(  
    PLACE_CODE      VARCHAR2(50)      PRIMARY KEY,      --지역코드(PK)
    PLACE_NAME      VARCHAR2(50)      NOT NULL            --지역이름
);

--------------------------------------------------------------------------------

--공지사항 테이블
DROP TABLE NOTICE_BOARD  CASCADE CONSTRAINTS;
CREATE TABLE NOTICE_BOARD(  
    NOTICE_NUM      NUMBER      PRIMARY KEY,       --공지번호(PK)
    NOTICE_ONE      VARCHAR2(50)    NOT NULL,          --구분
    NOTICE_TITLE    VARCHAR2(50)    NOT NULL,          --제목
    NOTICE_CON      CLOB            NOT NULL,          --내용
    NOTICE_DATE     DATE            NOT NULL           --작성일
);

--------------------------------------------------------------------------------

--대관신청 테이블
DROP TABLE GROUP_BOARD CASCADE CONSTRAINTS;
CREATE TABLE GROUP_BOARD(
    GROUP_NUM           VARCHAR2(50)    PRIMARY KEY,     -- 대관신청코드(PK)
    CUS_ID              VARCHAR2(50)    NOT NULL,        -- 회원ID(FK)
    GROUP_LOC           VARCHAR2(100)   NOT NULL,        -- 영화관위치
    GROUP_TYPE          VARCHAR2(50)    NOT NULL,        -- 분류
    GROUP_EXPECTED_NUMBER   NUMBER         NOT NULL,     -- 예상인원
    GROUP_DATE          DATE            NOT NULL,        -- 희망일
    GROUP_TIME          TIMESTAMP       NOT NULL,        -- 희망시간
    GROUP_MOVIE_TITLE   VARCHAR2(100)   NOT NULL,        -- 영화제목
    GROUP_TITLE         VARCHAR2(50)    NOT NULL,        -- 제목 
    GROUP_CON           CLOB            NOT NULL,        -- 내용 
    GROUP_NAME          VARCHAR2(50)    NOT NULL,        -- 단체명 
    NAME                VARCHAR2(30)    NOT NULL,        -- 신청고객명 
    GROUP_PHONE         VARCHAR2(50)    NOT NULL,        -- 연락처 
    GROUP_EMAIL         VARCHAR2(50)    NOT NULL        -- 이메일 
);
 -------------------------------------------------------------------------------

--답변테이블
DROP TABLE RE_ANSWER CASCADE CONSTRAINTS;
CREATE TABLE RE_ANSWER(  
    CUS_ID      VARCHAR2(50)    NOT NULL,        -- 회원ID
    RE_TITLE    VARCHAR2(50)    NOT NULL,        -- 제목
    RE_CON      CLOB            NOT NULL,        -- 내용
    RE_DATE     TIMESTAMP       NOT NULL,        -- 작성일
    CONSTRAINT PK_RE_ANSWER PRIMARY KEY (CUS_ID) -- 회원ID를 기본키로 설정
);

--------------------------------------------------------------------------------

-- 샘플용
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







