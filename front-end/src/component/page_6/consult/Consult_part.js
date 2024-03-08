import React, { useState } from "react";

import style from '../../../styles/page_6/consult.module.css'


function Consult_part() {
    const [showDetail, setShowDetail] = useState(false);
    const showBox = () => {
        setShowDetail(!showDetail)
    }

    return (
        <div className={`Consult ${style.Consult}`}>
            <div className={`Consult_name${style.Consult_name}`}>
                <p>문의내용(<span className="haveto">* 필수 입력</span>)</p>
                <hr></hr>
            </div>
            <div >
                <table className={`Consult_table ${style.Consult_table}`}>
                    <tr>
                        <td style={{ paddingRight: '20px' }}>분류 *</td>
                        <td>
                            <select className={`select1 ${style.select1}`} required>
                                <option value={'#'}>분류선택</option>
                                <option value={'theater'}>영화관</option>
                                <option value={'movie'}>영화</option>
                                <option value={'membership'}>멤버쉽</option>
                                <option value={'coupon'}>쿠폰</option>
                                <option value={'page'}>홈페이지</option>
                                <option value={'myinfo'}>개인정보</option>
                            </select>
                            <select className={`select2 ${style.select2}`}>
                                <option value={'#'}>분류선택</option>
                                <option value={'theater'}>영화관</option>
                                <option value={'movie'}>영화</option>
                                <option value={'membership'}>멤버쉽</option>
                                <option value={'coupon'}>쿠폰</option>
                                <option value={'page'}>홈페이지</option>
                                <option value={'myinfo'}>개인정보</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>종류 *</td>
                        <td>
                            <select required>
                                <option value={'movie2'}>영화관문의</option>
                                <option value={'else2'}>기타문의</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>제목 *</td>
                        <td><input type="text" placeholder="제목을 입력해주세요" required /></td>
                    </tr>
                    <tr>
                        <td>내용 *</td>
                        <td><textarea className={`consult_content ${style.consult_content}`}></textarea></td>
                    </tr>
                </table>
            </div>
            <div className={`myinfo ${style.myinfo}`}>
                <div className={`myinfo_name${style.Consult_name}`}>
                    <p>고객정보(<span className="haveto">* 필수 입력</span>)</p>
                    <hr></hr>
                </div>
                <div>
                    <table className={`myinfo_table ${style.myinfo_table}`}>
                        <tr>
                            <td>성명</td>
                            <td><input className="myname" type="text" style={{ padding: '0px 18px' }}></input></td>
                        </tr>
                        <tr>
                            <td>연락처</td>
                            <td>
                                <input className="tel1" type="text" style={{ marginRight: '10px', padding: '0px 18px' }}></input>
                                <input className="tel2" type="text" style={{ marginRight: '10px', padding: '0px 18px' }}></input>
                                <input className="tel3" type="text" style={{ marginRight: '10px', padding: '0px 18px' }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>
                                <input className="email1" type="text" style={{ marginRight: '10px', padding: '0px 18px' }}></input>
                                @
                                <input className="email2" type="text" style={{ padding: '0px 18px', marginLeft: '10px' }}></input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <a className={`btn_cancle ${style.btn_cancle}`}>취소</a>
                <a className={`btn_submit ${style.btn_cancle}`}>확인</a>
            </div>
        </div>
    );
}

export default Consult_part;