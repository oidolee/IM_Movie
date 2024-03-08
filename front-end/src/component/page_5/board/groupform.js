import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../../../styles/page_5/groupform.module.css';
import group1 from '../../../assets/page_5_3/group1.png';


function Form() {
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };  
  
    return (
      <div id='Form_wrappage' className={`Form_wrappage ${style.Form_wrappage}`}>
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className={`Form_title ${style.Form_title}`}>고객센터</Navbar.Brand> {/* 고객센터 제목 */}
        </Navbar>
  
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/NOTICE">공지사항</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">1:1문의</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/groupform">단체관람/대관문의</Nav.Link>
          </Nav.Item>
        </Nav>
  
        <div className={`Form_box ${style.Form_box}`}>
          <button className={`Form_grp01 ${style.Form_grp01}`} id="8"><img src={group1} alt='그룹1'/></button>
        </div>
  
        <div className={`Form_make ${style.Form_make}`}>
          <p>문의내용</p>
          <hr></hr>
        </div>

        <div id='Form_content' className={`Form_content ${style.Form_content}`}>
          <form onSubmit={handleSubmit}>
            <div className={`Form_group ${style.Form_group}`}>
              <label for="g_movie">영화관</label>
              <button className={`mvchsbtn ${style.mvchsbtn}`} onClick>영화관선택</button>
             <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="g_type">분류</label>
                <input type="radio" id="category1" className={`category1 ${style.category1}`}  name="category" value="category1" />
                <label for="category1">단체관람</label>
                
                <input type="radio" id="category2" className={`category2 ${style.category2}`} name="category" value="category2" />
                <label for="category2">대관</label>
                <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="g_num">예상인원</label>
              <input type="text" id="num1" className={`num1 ${style.num1}`}  name="num" />&nbsp;
              <label>명</label>
              <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="g_date">희망일</label>
                  <input type="date" id="date1" className={`date1 ${style.date1}`}  maxlength="4" placeholder="연도 월 일"/>
              <hr></hr>
              </div>
            

            <div className={`Form_group ${style.Form_group}`}>
              <label for="g_time">희망시간</label>
              <input type="text" id="time1" className={`time1 ${style.time1}`}  name="time1" />&nbsp;
              <label>시~</label>
              <input type="text" id="time2" className={`time2 ${style.time2}`}  name="time2" />&nbsp;
              <label>시 사이</label>
              <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
            <label for="g_con">내용</label>
            <div className={`con ${style.con}`}>
                <input type="text" id="con1" className={`con1 ${style.con1}`}  name="con1" placeholder="영화명을 입력해주세요" required /> 
                <input type="text" id="con2" className={`con1 ${style.con2}`}  name="con2" placeholder="제목을 입력해주세요" required /> 
            </div>
                <textarea className={`con3 ${style.con3}`} id="con3" name="con3" rows="3" placeholder="내용 및 첨부파일에 개인정보(카드번호,계좌번호,주민번호)가 포함되지 않도록 유의하여 입력해주세요." required></textarea>
            <hr></hr>
            </div>

            <div className={`Form_group1 ${style.Form_group1}`}>
              <label for="g_recol">답변수신 여부</label>
              <input type="checkbox" id="category3" className={`category3 ${style.category3}`}  name="category" value="category3" />
                <label for="category3">이메일 알림받기</label>
                
                <input type="checkbox" id="category4" className={`category4 ${style.category4}`} name="category" value="category4" />
                <label for="category4">SMS 알림받기</label>
              <hr></hr>
            </div>

            <div className={`Form_make2 ${style.Form_make2}`}>
                <p>신청자 정보</p>
                <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="gg_group">단체명</label>
              <input type="text" id="group_name" className={`group_name ${style.group_name}`}  name="groupname" />
              <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="gg_name">성명</label>
              <input type="text" id="name1" className={`name1 ${style.name1}`}  name="name" />
              <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="gg_tel">연락처</label>
              <input type="tel" id="tel1" className={`tel1 ${style.tel1}`}  name="tel" />
              <input type="tel" id="tel2" className={`tel2 ${style.tel2}`}  name="tel" />
              <input type="tel" id="tel3" className={`tel3 ${style.tel3}`}  name="tel" />
              
              <hr></hr>
            </div>

            <div className={`Form_group ${style.Form_group}`}>
              <label for="gg_email">이메일</label>
              <input type="email" id="email1" className={`email1 ${style.email1}`}  name="email" />
               &nbsp;@
              <input type="email" id="email2" className={`email2 ${style.email2}`}  name="email" />
              <hr></hr>
            </div>

            <div className={`Form_make3 ${style.Form_make3}`}>
                <p>개인정보 수집에 대한 동의</p>
            </div>

            <div id="section3" className={`agree_box ${style.agree_box}`}>
				<p className={`agree_con ${style.agree_con}`}>
                    개인정보의 수집목적 및 항목<br></br>
                    ① 수집 목적 : 원활한 고객 상담, 단체관람/대관문의 관련 서비스의 제공<br></br>
                    ② 수집 항목<br></br>
                    *필수입력사항<br></br>
                    - 이용자 식별을 위한 항목 : 성명, 연락처, 이메일, 아이디(로그인 시 수집)<br></br> 
                    
                    개인정보의 보유 및 이용기간<br></br>
                    최적의 서비스 제공을 위하여 입력하신 개인정보를 다음과 같이 보유합니다.<br></br>
                    보유기간 : 문의접수 후 처리 완료시점으로 부터 1년<br></br>

                    ※ 단체 문의 서비스 제공을 위한 최소한의 개인정보이며 거부할 수 있습니다. 다만, 수집에 동의하지 않을 경우 서비스 이용이 제한됩니다.<br></br>
				</p> 
				</div>

                <input type="radio" id="category5" className={`category5 ${style.category5}`}  name="category" value="category5" />
                <label for="category1">동의</label>
                
                <input type="radio" id="category6" className={`category6 ${style.category6}`} name="category" value="category6" />
                <label for="category2">동의하지않음</label>

            
          </form>
        </div>
      </div>
    );
  }
  
  export default Form;
