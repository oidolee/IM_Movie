import React, { Component } from "react";
import moment from "moment";
import style from "../../styles/page_1/Reservation_Payment.css";
import Res_event from "../../assets/page_1/event.png";
import Res_movie from "../../assets/page_1/movie.jpg";
import Res_img15 from "../../assets/page_1/15.jpg";
import Checkout from "../../pages/Checkout";
import Modal from "react-modal";

class Reservation_Payment extends Component {
  state = {
    isPointClicked: false,
    showModal: false, // 모달 열림 상태를 관리할 state 추가
  };

  handlePaymentClick = () => {
    // 결제 버튼 클릭 시 showModal 상태를 true로 변경하여 모달 열기
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    // 모달 닫기 버튼 또는 모달 외부 클릭 시 showModal 상태를 false로 변경하여 모달 닫기
    this.setState({ showModal: false });
  };

  handlePointClick = () => {
    this.setState((prevState) => ({
      isPointClicked: !prevState.isPointClicked,
    })); // 상태를 토글하여 내용을 보이거나 감춤
  };

  handleUsePointClick = () => {
    this.setState((prevState) => ({
      isPointClicked: !prevState.isPointClicked,
    })); // 상태를 토글하여 내용을 보이거나 감춤
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
                    <button
                      className="payment_seat"
                      onClick={this.handlePaymentClick}
                    >
                      결제수단
                    </button>
                    <button
                      className="point_seat"
                      onClick={this.handlePointClick}
                    >
                      포인트
                    </button>
                  </li>
                  <div className="point_seat_main">
                    <ul className="point_seat_sub">
                      {this.state.isPointClicked && (
                        <div className="usePoint">
                          <li>회원ID : </li>
                          <li>잔여 포인트 : </li>
                          <li>
                            사용 포인트 :{" "}
                            <input
                              type="text"
                              placeholder="사용할 포인트 입력하세요."
                            />
                          </li>
                          <li>
                            <button
                              className="usePointBtn"
                              onClick={this.handleUsePointClick}
                            >
                              사용
                            </button>
                          </li>
                        </div>
                      )}
                    </ul>
                  </div>
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
        {/* 모달 */}
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal} // 모달 외부를 클릭하거나 닫기 버튼을 눌렀을 때 handleCloseModal 함수 호출
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className={`Payment_movie ${style.Payment_movie}`}>
            {/* 모달 내용으로 Checkout 컴포넌트를 렌더링 */}
            <Checkout />
          </div>
          <button onClick={this.handleCloseModal}>닫기</button>
        </Modal>
      </div>
    );
  }
}

export default Reservation_Payment;
