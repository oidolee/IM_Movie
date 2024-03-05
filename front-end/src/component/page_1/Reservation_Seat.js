import React, { Component } from "react";
import moment from "moment";
import style from  "../../styles/page_1/Reservation_Seat.css";
import Res_movie from '../../assets/page_1/movie.jpg';
import Res_img15 from '../../assets/page_1/15.jpg';
import Res_img12 from '../../assets/page_1/12.jpg';
import Res_imgAll from '../../assets/page_1/all.jpg';

class QuantityCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }));
  };

  handleDecrement = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }));
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.quantity}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

class Reservation_Movie extends Component {

  render() {
    const sysdate = moment().format("YYYY-MM-DD");

    return (
      <div className={`Res_seat ${style.Res_seat}`}>
        <div className="Res_seat1">
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
        <div className="Res_seat2">
          <h4 className="Res_tit">인원/좌석 선택</h4>   
          <div className="Res_seat2_header">
            <ul className="Res_movie">
              <li><img src={Res_movie} className="movie_img" /></li>
              <ul className="Res_movie_content">
                <li><img src={Res_img15} className="age_img" /><strong className="movie_name">파묘</strong> | 24.03.10(일) | 20:30 ~ 22:54 | 영등포 1관</li>
                  <li>
                    <div>
                      <ul className="Res_cnt">
                        <li>성인<QuantityCounter /></li>
                        <li>청소년<QuantityCounter /></li>
                        <li>경로<QuantityCounter /></li>
                        <li>장애인<QuantityCounter /></li>
                      </ul>
                    </div>
                  </li>
              </ul>              
            </ul>           
          </div> 
          <div className="Res_seat2_main">
            
            </div>                 
        </div> 
      </div>
    );
  }
}

export default Reservation_Movie;
