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
                nav
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