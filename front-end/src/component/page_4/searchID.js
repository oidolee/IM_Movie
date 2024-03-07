import React, { Component } from 'react';
import style from '../../styles/page_4/searchID.css';
import Accordion from 'react-bootstrap/Accordion';
import { TextField, Button } from '@mui/material';

class SearchID extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: "0", // 아코디언 활성화 키
        };
    }

    componentDidMount() {
        // 페이지가 로드될 때 0번 아코디언이 열리도록 설정
        this.setState({ activeKey: "0" });
    }

    handleAccordionClick = (eventKey) => {
        this.setState({
            activeKey: eventKey === this.state.activeKey ? null : eventKey,
        });
    };

    handleRadioClick = (eventKey) => {
        this.setState({
            activeKey: eventKey,
        });
    };

    render() {
        return (
            <div id='wrappage' className={`wrappage ${style.wrappage}`}>
                <br/><br/>
                <h6>아이디 찾기</h6>
                <br></br>
                <h5> 등록된 회원 정보로 아이디를 찾을 수 있습니다.</h5>
                <hr />

                <Accordion activeKey={this.state.activeKey} >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={() => this.handleAccordionClick("0")}>
                            <input
                                type="radio"
                                id="phone"
                                name="searchType"
                                value="phone"
                                checked={this.state.activeKey === "0"}
                                onChange={() => this.handleRadioClick("0")}
                            />
                            <label htmlFor="phone">휴대폰 번호로 찾기</label>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div id='hpfind' className={`hpfind ${style.hpfind}`}>
                                <div className={`text ${style.text}`}>이름
                                {/* 이름 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    placeholder='이름을 입력해주세요.'
                                    onChange={this.onChange}
                                />
                                </div>
                                <br /><br />
                                <div className={`text ${style.text}`}>휴대폰 번호

                                {/* 핸드폰번호 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="hp"
                                    value={this.state.hp}
                                    placeholder='휴대폰 번호를 -빼고 입력해 주세요'
                                    onChange={this.onChange}
                                />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header onClick={() => this.handleAccordionClick("1")}>
                            <input
                                type="radio"
                                id="email"
                                name="searchType"
                                value="email"
                                checked={this.state.activeKey === "1"}
                                onChange={() => this.handleRadioClick("1")}
                            />
                            <label htmlFor="email">이메일 주소로 찾기</label>
                        </Accordion.Header>
                        <Accordion.Body>
                        <div id='hpfind' className={`hpfind ${style.hpfind}`}>
                                <div className={`text ${style.text}`}>이름
                                {/* 이름 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    placeholder='이름을 입력해주세요.'
                                    onChange={this.onChange}
                                />
                                </div>
                                <br /><br />
                                <div className={`text ${style.text}`}>휴대폰 번호

                                {/* 핸드폰번호 입력필드 */}
                                <TextField
                                    required
                                    type="text"
                                    name="hp"
                                    value={this.state.hp}
                                    placeholder='휴대폰 번호를 -빼고 입력해 주세요'
                                    onChange={this.onChange}
                                />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/><br/>

                <div id='signBtn' className={`signBtn ${style.signBtn}`}>
                    <Button id='goHome' className={`blackBtn ${style.blackBtn}`} onClick={this.goHome}>취소</Button>
                    <Button id='gosignup' className={`redBtn ${style.redBtn}`} onClick={this.gosignup}>다음</Button>
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default SearchID;