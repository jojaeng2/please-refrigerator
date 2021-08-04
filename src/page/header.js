import React, { useState } from 'react';

import '../style/mainpage/header/header.css';
// css 파일

// import this_header_show_logo from '../../img/logo.png';
import this_header_show_logo from '../img/logo_img_good.png';

import this_header_show_rgfimg from '../img/rfgimg2.png';
// 이미지 파일

import Axios from 'axios';


const Header = ({ history, this_header_set_inputs, setthis_header_set_inputs }) => {
    // 함수가 아니고 컴포넌트 처음 시작은 무조건 대문자

    const [page, setpage] = useState(false);

    const Func_header_check_login = () => {
        if (page === false) {
            // 페이지는 전역 state => true, false 값을 가진다.
            return (
                <>
                    <div className="login-wait-form">
                        <input className="login-wait-id" name="id" type="text" placeholder="Id" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, id: e.target.value })} value={this_header_set_inputs.id} />
                        <input className="login-wait-psword" name="pwd" type="text" placeholder="Password" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, pwd: e.target.value })} value={this_header_set_inputs.pwd} />
                        <button className="login-wait-btn" onClick={Func_header_check_iscorrect}>
                            login
                        </button>
                        <button className="login-wait-btn" onClick={() => Func_header_move_signup()}>
                            Sign up
                        </button>
                    </div>
                </>
            )
        }
        // false 일 때 => 로그인 안되있는 상황 => 아이디 비번 로그인 회원가입 버튼 전부다 나와있는 상태여야함

        else {
            return (
                <>
                    <div className="login-success-msg">
                            Welcome !! 
                    </div>
                    <div className="login-true-form">
                        <button class="header-myrfg-btn" onClick={() => Func_header_move_myrfg()}>
                            <img align="center" src={this_header_show_rgfimg} width='80' height='60' />
                        </button>
                    </div>
                </>
            )
        }
        // Ture 일 때 => 로그인에 성공했을 때 !!
    }

    const Func_header_move_home = () => {
        console.log("홈페이지")
        history.push('/');
    }

    const Func_header_check_iscorrect = (e) => {
        e.preventDefault();
        // 버튼을 누를시 수행하는 고유 동작을 중단시킴

        console.log("아이디비번 맞는지 체크하셈")
        if (this_header_set_inputs.id === "1" && this_header_set_inputs.pwd === "1") {
            setpage(!page)
        }
        // 로그인 성공 했을때에만 냉장고 버튼 생기게 해줘야 함
        // 로그인 안하면 ( 쿠키 없을 때 ) 버튼 생기면 안됨

        else alert("Check your ID and PWD")
    };

    const TokenLogin = (e) => {
        e.preventDefault();
        Axios.post("https://localhost:3001/login", {
            id: setthis_header_set_inputs.id,
            pwd: setthis_header_set_inputs.pwd
        })
            .then((response) => {
                if (response.data.success)//로그인 성공시
                {
                    localStorage.setItem('token', response.data.token);
                }
                else {
                    alert(response.data);//실패사유 출력
                }
                //console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const Func_header_move_myrfg = (e) => {
        console.log("냉장고 페이지로 이동")
        history.push('/rfgpage');
    }
    const Func_header_move_signup = (e) => {
        //e.preventDefault();
        console.log("회원가입 페이지로 이동")
        history.push('/signup');
        //history 라는 변수가 선언이 안되었는데 사용해?
        // = > 에러 
        //이제 넘겨받았으니까 history
        // push가 안되는 상황
        // 근데 /signup 하면 들어가짐 ( 회원가입 페이지 )
    }

    return (
        <>
            <div className="header-form">
                <div className="header-logo-form">
                    <img className="header-logo-img" onClick={() => Func_header_move_home()} src={this_header_show_logo} />
                    {/* 로고이미지 ( 왼쪽 상단에 ) */}
                </div>
                <div className="header-category-form" >
                    <button className="header-category-btn" id="header-category-button1">서지원</button>
                    <button className="header-category-btn" id="header-category-button2">조정현</button>
                    <button className="header-category-btn" id="header-category-button3">박슬빈</button>
                    <button className="header-category-btn" id="header-category-button4">김성은</button>
                    <button className="header-category-btn" id="header-category-button5">화이팅</button>
                </div> 


                <div className="login-window-form">
                    <Func_header_check_login></Func_header_check_login>
                </div>
            </div>
        </>
    )

}



export default React.memo(Header);