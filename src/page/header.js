import React, { useState, useEffect } from 'react';


import '../style/mainpage/header/header.css';
// css 파일

// import this_header_show_logo from '../../img/logo.png';
import this_header_show_logo from '../img/main_body_img/logo_img_good.png';
import this_header_show_rgfimg from '../img/main_body_img/rfgimg2.png';

// 이미지 파일

import Axios from 'axios';


const Header = ({ information, setinformation, history, this_header_set_inputs, setthis_header_set_inputs }) => {
    // 함수가 아니고 컴포넌트 처음 시작은 무조건 대문자
    const [page, setpage] = useState(false);

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        token && token_check()
    }, [])

    const token_check = async () => {
        await Axios.post("http://qkrtmfqls.gabia.io/tokencheck", {
            token: window.localStorage.getItem("token")
        })
            .then((response) => {
                if (response.data.token.success) {
                    setinformation({ id: response.data.token.token.id, nickname: response.data.token.token.nickname })
                    setpage(true)
                }
                else {
                    alert('토큰이 만료되었습니다.')
                    window.localStorage.clear();
                }
                console.log(response.data)
            })
            .catch((error) => {
            });
    }
    const changeid = (e) => {

    }
    const changepwd = (e) => {
        setthis_header_set_inputs({ ...this_header_set_inputs, pwd: e.target.value })
    }



    const Func_header_check_login = () => {

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
        Axios.post("http://qkrtmfqls.gabia.io/login", {
            id: this_header_set_inputs.id,
            pwd: this_header_set_inputs.pwd
        })
            .then((response) => {
                console.log(response.data)
                if (response.data.success)//로그인 성공시
                {
                    setpage(true)
                    setinformation({ id: response.data.id, nickname: response.data.nickname })
                    localStorage.setItem('token', response.data.token);
                } else if (response.data.token.success == false) {
                    window.localStorage.clear();

                    setpage(false)
                    alert(response.data.msg);//실패사유 출력
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const Func_header_move_myrfg = (e) => {
        console.log("냉장고 페이지로 이동")
        history.push('/rfgpage');
    }
    const Func_header_move_profile = (e) => {
        // alert("프로필 페이지로 이동")
        history.push('/profile');
    }
    const Func_header_move_introduce = (e) => {
        console.log("웹 소개 페이지로 이동")
        history.push('/introduce');
    }

    const Func_header_move_noticepage = (e) => {
        console.log("게시판으로 이동")
        history.push('/noticepage');
    }

    const Func_header_move_secret = (e) => {
        alert(" 아직 준비중인 페이지입니다 ! ")
    }

    const Func_header_move_page = (e) => {
        alert(" 아직 준비중인 페이지입니다 ! ")
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
            {/* 이거 컴포넌트 나눠서 해줘요 */}
            <div className="header-form">
                <div className="header-logo-form">
                    <img className="header-logo-img" onClick={() => Func_header_move_home()} src={this_header_show_logo} />
                    {/* 로고이미지 ( 왼쪽 상단에 ) */}
                </div>
                <div className="header-category-form" >
                    <button className="header-category-btn" onClick={() => Func_header_move_introduce()} id="header-category-button1">Introduce</button>
                    <button className="header-category-btn" onClick={Func_header_move_profile} id="header-category-button4">Profile</button>
                    <button className="header-category-btn" id="header-category-button2" onClick={Func_header_move_noticepage}>Board</button>
                    <button className="header-category-btn" id="header-category-button3" onClick={Func_header_move_secret}>Secret</button>
                    <button className="header-category-btn" id="header-category-button5" onClick={Func_header_move_page}>Page</button>
                </div>

                <div className="login-window-form">
                    {page != true ?
                        <>
                            <div className="login-wait-form">
                                <input className="login-wait-id" name="id" type="text" placeholder="Id" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, id: e.target.value })} value={this_header_set_inputs.id} />
                                <input className="login-wait-psword" name="pwd" type="password" placeholder="Password" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, pwd: e.target.value })} value={this_header_set_inputs.pwd} />
                                <button className="login-wait-btn" onClick={TokenLogin}>
                                    login
                                </button>
                                <button className="login-wait-btn" onClick={() => Func_header_move_signup()}>
                                    Sign up
                                </button>
                                <button className="login-wait-btn" onClick={() => token_check()}>
                                    토큰체크
                                </button>
                            </div>
                        </> :
                        <>
                            <div className="login-success-msg1">
                                Welcome !!
                                <span className="login-success-msg2">Have a good day 🌈</span>
                            </div>
                            <div className="login-true-form">
                                <button class="header-myrfg-btn" onClick={() => Func_header_move_myrfg()}>
                                    <img align="center" src={this_header_show_rgfimg} width='100' height='80' />
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )

}



export default React.memo(Header);