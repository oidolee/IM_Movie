import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // useHistory 불러오기
import ApiService from '../../ApiService';
import style from '../../styles/page_4/login.module.css';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory(); // useHistory 훅 사용하여 history 객체 가져오기

    const handleLogin = () => {
        let inputData = {
            email: id,
            password: password
        }

        console.log(inputData);

        //로그인
        ApiService.login(inputData)
            .then(res => {
                console.log(res.data);
                if(res.data.resultCode == 200){
                    alert("로그인 성공")
                    history.push('/'); // history 객체를 사용하여 페이지 이동
                } else {
                    alert("로그인 실패")
                }
                // sessionStorage.setItem('user', JSON.stringify(res.data)); // 예시: res.data에는 사용자 정보가 들어있다고 가정
                
            })
            .catch(err => {
                console.log('에러', err);
                setMessage('로그인에 실패했습니다.');
            });
    };

    return (
        <div id='wrappage' className={`loginComponent_wrappage ${style.wrappage}`}>
            <br />

            <div id='login-box' className={`login_box ${style.login_box}`}>

                {/* 첫 번째 행 */}
                <div className={style.input_box}>

                    <TextField
                        required
                        //id="standard-required"
                        variant="standard"
                        label="이메일"
                        type="text"
                        name="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />

                    <TextField
                        required
                        //id="standard-required"
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
            <div id='login_bot' className={`login_bot ${style.login_bot}`}>
                    <a href='/sign-up' id='signupPage' className={`signup ${style.signup}`}>회원가입</a>
                    <a href='/sign-up' id='confirmID' >아이디 찾기</a>
                    <a href='/sign-up' id='confrimPwd' className={`confirmPassword ${style.confirmPassword}`}>비밀번호 찾기</a>
                </div>

            <br /><br />
        </div>
    );
}

export default Login;