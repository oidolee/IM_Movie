import React from 'react';
import logo from '../../assets/main/IM_Logo.png'
import '../../styles/main/Header.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// npm install react-bootstrap

function Header() {
    return (
        <div id="header_section" className='header_section'>
            <div className='gnb'>
                <div className='logo'>
                    <a href="/">
                        <img src={logo} style={{width:'100px'}} />
                    </a>
                </div>

                <div className='right-gnb'>
                    <ul>
                        <li><a href='page_1'>멤버쉽</a></li>
                        <li><a href='page_2'>고객센터</a></li>
                        <li><a href='page_3'>단체관람/대관문의</a></li>
                        <li><a href='#'>로그인</a></li>
                    </ul>
                </div>
            </div>
            <div className='nav'>
                <ul>
                    <li>
                        <a href="#">예매!</a>
                        <div>
                            <ul>
                                <li><a href="#">예매하기</a></li>
                                <li><a href="#">상영시간표</a></li>
                                <li><a href="#">할인</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">영화</a>
                        <div>
                            <ul>
                                <li><a href="#">홈</a></li>
                                <li><a href="#">현재상영작</a></li>
                                <li><a href="#">상영예정작</a></li>
                                <li><a href="#">아르뗴</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">영화관</a>
                        <div>
                             <ul>
                                <li><a href="#">스페셜관</a></li>
                                <li><a href="#">서울</a></li>
                                <li><a href="#">경기/인천</a></li>
                                <li><a href="#">전라/광주</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">이벤트</a>
                        <div>
                             <ul>
                                <li><a href="#">홈</a></li>
                                <li><a href="#">영화</a></li>
                                <li><a href="#">시사회/무대인사</a></li>
                                <li><a href="#">HOT</a></li>
                                <li><a href="#">제휴할인</a></li>
                                <li><a href="#">우리동네영화관</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">스토어</a>
                        <div>
                             <ul>
                                <li><a href="#">베스트</a></li>
                                <li><a href="#">관람권</a></li>
                                <li><a href="#">스낵음료</a></li>
                                <li><a href="#">포토카드</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>


            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">IM_Movie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '00px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/samples">SampleList</Nav.Link>
                            <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/add-sample">Sample 추가</NavDropdown.Item>
                            <NavDropdown.Item href="/add-sample">장바구니</NavDropdown.Item>
                            <NavDropdown.Item href="/add-sample">Sample 삭제</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">구매</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">환불</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="커뮤니티" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/board">게시판</NavDropdown.Item>
                            <NavDropdown.Item href="/qna">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="/notice">공지사항</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/#action4">찾아오기</NavDropdown.Item>
                            <NavDropdown.Item href="/#action5">컨택</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}



        </div>
    );
}

export default Header;