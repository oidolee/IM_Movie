import React, { Component } from 'react';
import '../../styles/page_3/StoreDetail.css'
import package1 from '../../assets/page_3/package1.jpg'

class StoreDetail extends Component {
    render() {
        return (
            <div className='store'>
                <div className='contents'>
                    <div className="main_img">
                        <img src={package1} alt="[롯시와 봄] 패키지" />
                    </div>

                    <div className="pd_detail">
                        <table className="pd_table" summary="상품 상세설명에 대한 표입니다">
                            <caption>상품 상세내용</caption>
                            <colgroup>
                                <col style={{ width: '30%' }} />
                                <col style={{ width: 'auto' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="row" className="badge_wrap" colSpan="2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="tit" colSpan="2">[롯시와 봄] 패키지</th>
                                </tr>
                                <tr>
                                    <td><span className="txt_sale">15%</span></td>
                                    <td><span className="txt_price">22,000<em>원</em></span><span className="txt_price_ins">26,000원</span></td>
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
                        <div className="bx_num">
                            <button className="btn_mins">삭제</button>
                            <div className="txt_num">1</div>
                            <button className="btn_plus">추가</button>
                        </div>
                        <div className="txt_price_wrap">
                            총 상품금액<strong className="txt_price_str">22,000<em>원</em></strong>
                        </div>
                        <div className="btn_wrap">
                            <button className="btn_col2 ty7">선물하기</button>
                            <button className="btn_col1 ty7">구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreDetail;