import React, { Component } from "react";
import moment from "moment";
import "../../styles/page_1/Reservation_Movie.css";
import Reservation_Swiper from "./Reservation_Swiper.js";

class Reservation_Movie extends Component {
  render() {
    const sysdate = moment().format("YYYY-MM-DD");
    const year = moment().format("YYYY");
    const month = moment().format("MM");
    const day = moment().format("DD");

    return (
      <div className="Res_menu">
        <div id="Res_menu1">
          <ul>
            <li className="step">
              <a href="#Res_step01">
                <strong>
                  <span>
                    01
                    <br />
                    상영시간
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>선택한 영화 제목</dt>
                    <dd></dd>
                    <dt>선택한 상영관</dt>
                    <dd></dd>
                    <dt>선택한 상영 날짜</dt>
                    <dd></dd>
                    <dt>선택한 상영 시간</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step02">
                <strong>
                  <span>
                    02
                    <br />
                    인원/좌석
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>인원</dt>
                    <dd></dd>
                    <dt>좌석</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step03">
                <strong>
                  <span>
                    03
                    <br />
                    결제
                  </span>
                </strong>
                <div className="step_content">
                  <dl>
                    <dt>티켓금액</dt>
                    <dd></dd>
                    <dt>할인금액</dt>
                    <dd></dd>
                    <dt>총합계</dt>
                    <dd></dd>
                  </dl>
                </div>
              </a>
            </li>
            <li className="step">
              <a href="#Res_step04">
                <strong>
                  <span>
                    04
                    <br />
                    결제완료
                  </span>
                </strong>
              </a>
            </li>
          </ul>
        </div>
        <div id="Res_menu2">
          <ul className="Res_left">
            <li className="Res_tit">영화관</li>
            <li>
              <div className="menu2">
                <ul className="menu2_left">
                  <li>전체</li>
                  <li>
                    <a href="#none">서울</a>
                  </li>
                  <li>
                    <a href="#none">경기/인천</a>
                  </li>
                  <li>
                    <a href="#none">충청/대전</a>
                  </li>
                  <li>
                    <a href="#none">전라/광주</a>
                  </li>
                  <li>
                    <a href="#none">경북/대구</a>
                  </li>
                  <li>
                    <a href="#none">경남/부산/울산</a>
                  </li>
                  <li>
                    <a href="#none">강원</a>
                  </li>
                  <li>
                    <a href="#none">제주</a>
                  </li>
                </ul>
                <ul className="menu2_right">
                  <li>
                    <a href="#none">서울</a>
                  </li>
                  <li>
                    <a href="#none">경기/인천</a>
                  </li>
                  <li>
                    <a href="#none">충청/대전</a>
                  </li>
                  <li>
                    <a href="#none">전라/광주</a>
                  </li>
                  <li>
                    <a href="#none">경북/대구</a>
                  </li>
                  <li>
                    <a href="#none">경남/부산/울산</a>
                  </li>
                  <li>
                    <a href="#none">강원</a>
                  </li>
                  <li>
                    <a href="#none">제주</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div id="Res_menu3">
          <ul className="Res_left">
            <li className="Res_tit">영화 선택</li>
            <li>
              <div className="menu3">
                <ul className="menu3_left">
                  <li>
                    <a href="#none">파묘</a>
                  </li>
                  <li>
                    <a href="#none">듄:파트2</a>
                  </li>
                  <li>
                    <a href="#none">건국전쟁</a>
                  </li>
                  <li>
                    <a href="#none">윙카</a>
                  </li>
                  <li>
                    <a href="#none">소풍</a>
                  </li>
                  <li>
                    <a href="#none">로봇 드림</a>
                  </li>
                  <li>
                    <a href="#none">패스트 라이브즈</a>
                  </li>
                  <li>
                    <a href="#none">엘리멘탈</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div id="Res_menu4">
          <ul className="Res_left">
            <li className="Res_tit">{sysdate}</li>
            <li>
              <div className="menu4">
                <ul className="menu4_right">
                  <Reservation_Swiper />
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Reservation_Movie;
