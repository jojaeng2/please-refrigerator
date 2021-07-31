import React from 'react';
import '../style/header.css';
import this_header_show_logo from '../logo.png';
import this_header_show_rgfimg from '../rfgimg.jpeg';
import Axios from 'axios';

const Header = ({ history, setthis_header_set_inputs, this_header_set_inputs }) => {
    // 함수가 아니고 컴포넌트 처음 시작은 무조건 대문자


    const Func_header_check_iscorrect = (e) => {
        e.preventDefault();
        // 버튼을 누를시 수행하는 고유 동작을 중단시킴

        console.log("아이디비번 맞는지 체크하셈")
        if (this_header_set_inputs.id === "1" && this_header_set_inputs.pwd === "1") alert("로그인에 성공하였습니다.")
        // 로그인 성공 했을때에만 냉장고 버튼 생기게 해줘야 함
        // 로그인 안하면 ( 쿠키 없을 때 ) 버튼 생기면 안됨
        
        else alert("아이디와 비밀번호를 확인하세요.")
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
        history.push('/rgfpage');
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
            <div className="box1">
                <img className="box1_img" src={this_header_show_logo} width='180' height='180' />
                {/* 로고이미지 ( 왼쪽 상단에 ) */}
            </div>
            <div className="box2">
                <button class="scale" onClick={() => Func_header_move_myrfg()}><img align="center" src={this_header_show_rgfimg} width='30' height='50' />
                    {/* 냉장고 버튼 이미지, 로그인이 되어 있으면 다음 페이지로 넘어감 */}
                    {/* 로그인이 되었을때에 나오게 해야하는데 그거 어케 하는지 모름 */}
                    {/* 페이지 넘어가면 옮겨줘야함 */}
                </button>
            </div>
            <div className="box3">
                <input className="box3_id" name="id" type="text" placeholder="Id" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, id: e.target.value })} value={this_header_set_inputs.id} />
                <input className="box3_pwd" name="pwd" type="text" placeholder="Password" onChange={e => setthis_header_set_inputs({ ...this_header_set_inputs, pwd: e.target.value })} value={this_header_set_inputs.pwd} />

                <button className="box3_btn" onClick={Func_header_check_iscorrect}>login</button>
                <button className="box3_btn" onClick={() => Func_header_move_signup()}>회원가입</button>
            </div>

        </>
    )
}

export default Header;