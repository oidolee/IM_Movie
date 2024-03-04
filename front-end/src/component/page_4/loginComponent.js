import { Button, TextField } from '@mui/material';
import React, { Component } from 'react';
import ApiService from '../../ApiService';
import '../../styles/page_4/login.module.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // 로그인 함수 구현

    login = (e) => {
        e.preventDefault();

        let inputData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(inputData);

        //로그인
        ApiService.login(inputData)
            .then(res => {
                sessionStorage.setItem('user', JSON.stringify(res.data)); // 예시: res.data에는 사용자 정보가 들어있다고 가정
                this.setState({

                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log('에러', err);
                this.setState({ message: '로그인에 실패했습니다.' });
            });
    }

    render() {
        return (
            <div className='wrappage' id='wrappage'>
                <br></br>

                <div className='login_box' id='login-box'>

                    {/* 첫 번째 행 */}
                    <div className='input_box'>

                        <TextField
                            required
                            //id="standard-required"
                            variant="standard"
                            label="이메일"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />



                        <TextField
                            required
                            //id="standard-required"
                            variant="standard"
                            label="비밀번호"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>

                    <Button id='btn' variant="contained" color="primary" onClick={this.login}>로그인</Button>

                </div>

                <br /><br />
            </div>
        )
    }
}

export default Login;