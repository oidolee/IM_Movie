import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import style from '../../../styles/page_5/NOTICE.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';


function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // 검색 기능 구현
    console.log('검색어:', searchTerm);
  };


  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelect = (event) => {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
  };


  return (
    <div className={`search_box2 ${style.search_box2}`}>

<div className={`select_box ${style.select_box}`}>
  <select onChange={handleSelect}>
    <option value={1}>서울</option>
    <option value={2}>경기/인천</option>
    <option value={3}>전라/광주</option>
  </select>
  
    <ul>
      <li id='region_1' style={{ display: selectedValue === 1 ? 'block' : 'none' }}>서울</li>
      <li id='region_2' style={{ display: selectedValue === 2 ? 'block' : 'none' }}>경기/인천</li>
      <li id='region_3' style={{ display: selectedValue === 3 ? 'block' : 'none' }}>전라/광주</li>
    </ul>
  </div>

        {/* <div id="region_1" className={`region_box ${style.region_box}`}>경기</div>
        <div id="region_2" className={`region_box ${style.region_box}`}>서울</div> */}
        

      <div className={`search2 ${style.search2}`}>
            <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleSearchChange}
            className={`search_input ${style.search_input}`}/>
            <button
            onClick={handleSearchSubmit}
            className={`search_btn ${style.search_btn}`}>검색</button>     
      </div>  
    </div>
  );
}

function FAQ() {
  return (
    <div id='wrappage' className={`wrappage ${style.wrappage}`}>
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className={`title ${style.title}`}>고객센터</Navbar.Brand> {/* 고객센터 제목 */}
      </Navbar>

      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/NOTICE">공지사항</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/groupform">1:1문의</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">단체관람/대관문의</Nav.Link>
        </Nav.Item>
      </Nav>

    <SearchBox /> {/* 검색창 컴포넌트 추가 */}

<div className={`content ${style.content}`}>
  <div className={`test2 ${style.test2}`}>
    <p>구분</p>
    <p>제목</p>
    <p>등록일</p>
  </div>
  <hr></hr>

  <ListGroup variant="flush">
    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px'}}>전체</span>
      <span style={{marginLeft: '350px'}}>회사 사칭 피싱 사기 주의</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>전체</span>
      <span style={{marginLeft: '350px'}}>개인정보처리방침 개정 안내</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>용산</span>
      <span style={{marginLeft: '350px'}}>용산관 상영관 리뉴얼 안내</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>청주용암</span>
      <span style={{marginLeft: '350px'}}>수퍼플렉스매니아 당첨자안내</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>가산</span>
      <span style={{marginLeft: '350px'}}>가산디지털 비상 대피 관련 안내</span>
      <span style={{marginLeft: '150px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>전체</span>
      <span style={{marginLeft: '350px'}}>임시휴관 안내</span>
      <span style={{marginLeft: '250px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>동래</span>
      <span style={{marginLeft: '350px'}}>동래관 이용안내</span>
      <span style={{marginLeft: '250px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>전체</span>
      <span style={{marginLeft: '350px'}}>정전발생 사과 안내문</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>성서</span>
      <span style={{marginLeft: '350px'}}>성서 리뉴얼 안내</span>
      <span style={{marginLeft: '250px'}}>2024-02-05</span>
    </ListGroup.Item>

    <ListGroup.Item>
      <span style={{ width: '200px', display: 'flex',marginLeft: '20px' }}>대영관</span>
      <span style={{marginLeft: '350px'}}>[대영관]영업종료 안내</span>
      <span style={{marginLeft: '200px'}}>2024-02-05</span>
    </ListGroup.Item>
  </ListGroup>
  <hr></hr>
</div>
    <Pagination className={`page2 ${style.page2}`}>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item >{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item >{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>
      <Pagination.Item >{7}</Pagination.Item> 
      </Pagination>

    </div>      
  );
}
export default FAQ


