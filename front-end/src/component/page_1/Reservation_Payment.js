import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";

class Reservation_Payment extends Component {

  handlePaymentClick = () => {
    this.props.history.push("/pages/Payment");
  };
  
  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_Payment ${style.Res_Payment}`}>
        <div id="Res_menu1">
          <ul>
            <li className="step" id="step2">
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
            <li className="step" id="step2">
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
            <li className="step" id="step1">
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
        <div className="Res_menu2">
          <ul className="Res_left">
            <li className="Res_tit">영화 선택</li>
            <div className="menu2">
              <ul className="menu2_left">
                <li className="menu2_main">
                  <img src={Res_movie} className="movie_img" />
                </li>
                <div className="menu2_sub">
                  <ul>
                    <li>
                      <img src={Res_img15} className="age_img" />
                      <strong>파묘</strong>
                    </li>
                    <li>일시 2024-03-07 (목) 17:05 ~ 19~29</li>
                    <li>영화관 건대입구</li>
                    <li>인원 성인1</li>
                    <hr />
                    <li>좌석 D3</li>
                    <li>
                      <a href="/page3">
                        <img src={Res_event} className="event_img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </ul>
        </div>
        <div className="Res_menu3">
          <ul className="Res_left">
            <li className="Res_tit">결제수단</li>
            <li>
              <div className="menu3">
                <ul className="menu3_left">
                  <li className="menu3_main">최종 결제수단</li>
                  <li>
                    <button id="payment_seat" onClick={this.handlePaymentClick}>결제하기</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div id="Res_menu4">
          <ul className="Res_left">
            <li className="Res_tit">결제하기</li>
            <li>
              <div className="menu4">
                <ul className="menu4_left">
                  <li></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Reservation_Payment;
