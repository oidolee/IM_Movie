import React, { Component } from 'react';
import ApiService from '../../ApiService';
import { TextField, Button, Modal } from '@mui/material'; // Modal을 import합니다.
import DaumPostcode from 'react-daum-postcode';
import style from '../../styles/page_4/signup.module.css';

class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            hp: '',
            birthday: null,
            zipcode: '',
            address: '',
            addr1: '',
            addr2: '',
            isModalOpen: false // 모달 열림 여부를 저장하는 상태 변수를 추가합니다.
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    CheckPasswordMatch = () => {
        const { password, passwordConfirm } = this.state;
        if (password !== passwordConfirm) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
    };

    handleDaumPostcode = () => {
        this.setState({ isModalOpen: true }); // 모달을 엽니다.
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false }); // 모달을 닫습니다.
    };

    handleAddressComplete = (data) => {
        let fullAddr = "";
        let extraAddr = "";
    
        if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
        } else {
            fullAddr = data.jibunAddress;
        }
    
        if (data.userSelectedType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
    
            fullAddr += (fullAddr !== '' ? '(' + extraAddr + ')' : '');
            console.log("fullAddr : " + fullAddr);
            
        }
    
        // addr1과 addr2를 결합하여 address에 저장합니다.
        
    
        this.setState({
            zipcode: data.zonecode,
            addr1: fullAddr,
            addr2: '',
             // 주소를 합쳐서 address에 저장합니다.
            isModalOpen: false // 주소 선택 후 모달을 닫습니다.
        });
        
    };
    
    

    saveCustomer = (e) => {
        e.preventDefault();
        const address = `${this.state.addr1} ${this.state.addr2}`; 
        
        let inputData = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            hp: this.state.hp,
            birthday: this.state.birthday,
            address: address
        };

        console.log(inputData);

        // 등록처리 
        ApiService.addCustomer(inputData)
            .then(res => {
                this.setState({})
                console.log('input 성공 : ', res.data);
                this.props.history.push('/index');
            })
            .catch(err => {
                console.log('addCustomer() 에러 ', err);
            });
    };

    render() {
        return (
            <div id='Page' className={`singupComponent ${style.singupComponent}`} >
                <div className={`singupComponent_box ${style.singupComponent_box}`}>
                    {/* 이메일 입력 필드 */}
                    <h6>이메일</h6>
                    <TextField
                        required
                        variant="standard"
                        label="이메일"
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder='이메일 입력'
                        onChange={this.onChange}
                    />
                    <Button variant="contained" color="primary" onClick={this.CheckEmail}> 인증요청 </Button>
                    <br /><br />

                    {/* 이름 입력 필드 */}
                    <h6>이름</h6>
                    <TextField
                        required
                        variant="standard"
                        label="이름"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='이름 입력'
                        onChange={this.onChange}
                    />
                    <br /><br />

                    {/* 비밀번호 입력 필드 */}
                    <h6>비밀번호</h6>
                    <TextField
                        required
                        variant="standard"
                        label="비밀번호"
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder='비밀번호 입력'
                        onChange={this.onChange}
                    />
                    <br /><br />
                    <TextField
                        required
                        variant="standard"
                        label="비밀번호 확인"
                        type="password"
                        name="passwordConfirm"
                        value={this.state.passwordConfirm}
                        placeholder='비밀번호 확인'
                        onChange={this.onChange}
                        onBlur={this.CheckPasswordMatch}
                    />
                    <br /><br />

                    {/* 핸드폰 번호 입력 필드 */}
                    <h6>핸드폰</h6>
                    <TextField
                        required
                        variant="standard"
                        label="핸드폰 번호"
                        type="text"
                        name="hp"
                        value={this.state.hp}
                        placeholder='핸드폰 번호 - 빼고 입력하세요'
                        onChange={this.onChange}
                        className={`singupComponent_text ${style.singupComponent_text}`}
                    />
                    <br /><br />

                    {/* 생년월일 입력 필드 */}
                    <h6>생년월일</h6>
                    <TextField
                        required
                        variant="standard"
                        type="date"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={this.onChange}
                        className={`singupComponent_text ${style.singupComponent_text}`}
                    />
                    <br /><br />

                    {/* 주소 입력 관련 필드들 */}
                    <form action="" name="form1">
                        <input type="text" name="zipcode" maxLength="5" value={this.state.zipcode} readOnly />
                        {/* 주소검색 버튼을 클릭하면 모달이 열리도록 수정합니다. */}
                        <Button variant="contained" color="primary" onClick={this.handleDaumPostcode} id='addressBtn' className={`addressBtn ${style.addressBtn}`}>우편번호검색</Button> <br />
                        <input type="text" name="addr1" value={this.state.addr1} readOnly />
                        <input type="text" name="addr2" value={this.state.addr2} onChange={(e) => this.setState({ addr2: e.target.value })} />
                    </form>

                    {/* 모달 */}
                    <Modal
                        open={this.state.isModalOpen} // 모달 열림 여부를 상태 변수에 바인딩합니다.
                        onClose={this.handleCloseModal} // 모달을 닫는 핸들러를 설정합니다.
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div>
                            {/* DaumPostcode 컴포넌트를 모달 내에 렌더링합니다. */}
                            <DaumPostcode
                                onComplete={this.handleAddressComplete}
                                autoClose
                                animation
                            />
                        </div>
                    </Modal>

                    <br/> <br/>

                    {/* 회원가입 버튼 */}
                    <Button id="btn" className={`singupComponent_btn ${style.singupComponent_btn}`} variant="contained" color="primary" onClick={this.saveCustomer}>회원가입</Button>
                </div>
            </div>
        )
    }
}

export default SignupComponent;
