import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import style from  '../../styles/page_4/login.module.css';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // 로그인 처리 로직 구현
    };

    return (
        <div id='wrappage' className={`loginComponent_wrappage ${style.wrappage}`}>
            <br />

            <div id='login-box' className={`login_box ${style.login_box}`}>
                
                {/* 첫 번째 행 */}
                <div className={style.input_box}>
                    
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="이메일"
                        type="text"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                
                    <TextField
                        required
                        id="standard-required"
                        variant="standard"
                        label="비밀번호"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <Button id='btn' className={`loginComponent_btn ${style.loginComponent_btn}`} variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                
            </div>

            <br /><br />
        </div>
    );
}

export default Login;
