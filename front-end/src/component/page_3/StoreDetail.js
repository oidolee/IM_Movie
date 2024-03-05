import React, { Component } from 'react';
import style from  '../../styles/page_3/StoreDetail.module.css'
import package1 from '../../assets/page_3/package1.jpg'
import StoreGift from './StoreGift'; // StoreGift 컴포넌트를 import



class StoreDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isStoreGiftOpen: false, // 선물하기 모달 열림 여부를 추적하는 상태
            quantity: 1, // 초기 수량 값
            price: 22000, // 초기 상품 가격 값
        };
    }

    // 선물하기 버튼 클릭시 모달 열기
    openStoreGift = () => {
        this.setState({ isStoreGiftOpen: true });
        document.body.style.overflow = 'hidden';
    };

    // 선물하기 모달 닫기
    closeStoreGift = () => {
        this.setState({ isStoreGiftOpen: false });
        document.body.style.overflow = 'auto'; 
    };



    // 수량 증가
    increaseQuantity = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1,
            price: prevState.price + 22000, // 가격에 22000원 추가
        }));
    };

    // 수량 감소
    decreaseQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState((prevState) => ({
                quantity: prevState.quantity - 1,
                price: prevState.price - 22000, // 가격에 22000원 감소
            }));
        }
    };

    render() {
        return (
            <div c >
                <div className={`store_detail ${style.store_detail}`}>
                    <div className={`main_img ${style.main_img}`}>
                        <img src={package1} alt="[롯시와 봄] 패키지" />
                    </div>

                    <div className={`pd_detail ${style.pd_detail}`}>
                        <table className={`pd_table ${style.pd_table}`} summary="상품 상세설명에 대한 표입니다">
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: 'auto' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="row" className={`badge_wrap ${style.badge_wrap}`} colSpan="2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className={`tit ${style.tit}`} colSpan="2">[롯시와 봄] 패키지</th>
                                </tr>
                                <tr>
                                    <td><span className={`txt_sale ${style.txt_sale}`}>15%</span></td>
                                    <td><span className={`txt_price ${style.txt_price}`}>22,000<em>원</em></span><span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">구성품</th>
                                    <td>2D일반관람권 2매</td>
                                </tr>
                                <tr>
                                    <th scope="row">구매제한</th>
                                    <td>1인 1일 4매</td>
                                </tr>
                                <tr>
                                    <th scope="row">유효기간</th>
                                    <td>온라인 관람권 6 개월</td>
                                </tr>
                                <tr>
                                    <th scope="row">사용가능 영화관</th>
                                    <td>
                                        <button id="availableCinema" className="btn_col4 ty3 rnd" title="레이어팝업 열기">온라인 관람권</button>&nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={`bx_num ${style.bx_num}`}>
                            <button className={`btn_mins ${style.btn_mins}`} onClick={this.decreaseQuantity}>-</button>
                            <div className={`txt_num ${style.txt_num}`}>{this.state.quantity}</div>
                            <button className={`btn_plus ${style.btn_plus}`} onClick={this.increaseQuantity}>+</button>
                        </div>
                        <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                            총 상품금액<strong className={`txt_price_str ${style.txt_price_str}`}> {this.state.price.toLocaleString()}<em>원</em></strong>
                        </div>
                        <div className={`btn_wrap ${style.btn_wrap}`}>
                            <button className="btn_col2 ty7" onClick={this.openStoreGift}>선물하기</button>
                            <button className="btn_col1 ty7">구매하기</button>
                        </div>

                        {/* 선물하기 모달/팝업 조건부 렌더링 */}
                        {this.state.isStoreGiftOpen && <StoreGift onClose={this.closeStoreGift} />}

                    </div>
                </div>


                <ul class={`tab_wrap ${style.tab_wrap}`}>
                    <button type="button" className={`tab_tit ${style.tab_tit}`} style={{ width: '50%', left: '0%' }} >
                        <span>사용방법</span>
                    </button>
                    <button type="button" className={`tab_tit ${style.tab_tit}`} style={{ width: '50%', left: '0%' }}>
                        <span>유의사항</span>
                    </button>
                    
                </ul>
                
                
            </div>
        );
    }
}

export default StoreDetail;
