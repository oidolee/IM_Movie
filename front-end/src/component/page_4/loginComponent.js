import { Button, TextField, Grid } from '@mui/material';
import React, { Component } from 'react';
import '../../styles/page_4/login.module.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: '',
            message: ''
        }
    }

    // 로그인 함수 구현

    render() {
        return (
            <div id='wrappage'>
                <br></br>

                <div id='login-box'>
                    
                        {/* 첫 번째 행 */}
                            <div className='input-box'>
                               
                                <TextField
                                    required
                                    id="standard-required"
                                    variant="standard"
                                    label="이메일"
                                    type="text"
                                    name="id"
                                    value={this.state.id}
                                />
                             
                            
                            
                                <TextField
                                    required
                                    id="standard-required"
                                    variant="standard"
                                    label="비밀번호"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                />
                            </div>
                        
                            <Button id='btn' variant="contained" color="primary" onClick={this.Login}>Login</Button>
                            
                            
                          
                </div>
                

                <br /><br />
            </div>
        )
    }
}

export default Login;