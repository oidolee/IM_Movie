import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../../styles/page_6/Mypage_mid_nav.module.css'

function Mypage_mid_nav() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className={`Mypage_mid_nav ${style.Mypage_mid_nav}`}>
          <Nav className="me-auto">
            <NavDropdown title="결제내역" href="#purchasing">
              <Nav.Link href="#purchasing">예매내역</Nav.Link>
              <Nav.Link href="#cancle">취소내역</Nav.Link>
            </NavDropdown>
            <Nav.Link href="#coupon">쿠폰함</Nav.Link>
            <Nav.Link href="#event">MY 이벤트</Nav.Link>
            <NavDropdown title="MY 무비로그" href="#movieLog">
              <Nav.Link href="#wishMovie">보고싶어요</Nav.Link>
            </NavDropdown>
            <Nav.Link href="#consult">1:1 문의</Nav.Link>
            <NavDropdown title="MY 정보 관리" href="#myinfo">
              <Nav.Link href="#infoDetail">회원정보관리</Nav.Link>
              <Nav.Link href="#myinfo">1:1문의내역</Nav.Link>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Mypage_mid_nav;