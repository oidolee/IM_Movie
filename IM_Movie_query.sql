-- 민진 주차등록
create table IM_Parking (
    IP_No number primary key,
    IP_Block varchar(2) not null,
    IP_Number number(20) not null,
    IP_CarNumber varchar(20) not null,
    IP_InOutCheck char(1) not null,
    IP_Client varchar(50) not null,
    IP_RegDate timestamp default sysdate,
    Reservation_id number,
    foreign key (Reservation_id) references Reservation(Res_id)
);