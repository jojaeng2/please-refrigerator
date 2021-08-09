import React, {useState}from "react";
import '../style/signup_page/signup.css';
import Axios from 'axios'

function App({ history, setthis_signup_set_inputs, this_signup_set_inputs }) {
  // 만약에 전달안해줬는데? 여기서 히스토리 받았자나 => 그럼 안되지
  const [register,setregister] = useState({id : '',pwd : '',pwdcheck:'',name : ''})

  const Func_signup_check_succecss = () => {
    console.log("회원가입 성공")
    history.push('/');
  }

  const user_register = async () => {
    await Axios.post("http://qkrtmfqls.gabia.io/register", {
      id : register.id,
      psword : register.pwd,
      name : register.name,
    })
      .then((response) => {
        if(response.data.success){
          alert('회원가입을 축하드립니다!')
          history.push('/')
        }
      })
      .catch((error) => {
        if (error.response.data.code == 419) //error 떳을때 데이터 가져오기
        {
          console.log(error)
        }
      });
  }

  const Func_signup_check_password = (e) => {
    e.preventDefault();
    // 버튼을 누를시 수행하는 고유 동작을 중단시킴
    if (register.pwd === register.pwdcheck) alert("일치합니다.")
    // 로그인 성공 했을때에만 냉장고 버튼 생기게 해줘야 함
    // 로그인 안하면 ( 쿠키 없을 때 ) 버튼 생기면 안됨
    else alert("Check your PWD.")
  }

  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <div className="register-form-title"> Hello ! </div>
          <input type="text" placeholder="ID"onChange={e => setregister({ ...register, id: e.target.value })} value={register.id} />
          <input type="password" onChange={e => setregister({ ...register, pwd: e.target.value })} value={register.pwd} placeholder="Password" />
          <input type="password" placeholder="Check Password" onChange={e => setregister({ ...register, pwdcheck: e.target.value })} value={register.pwdcheck} />
          <button onClick={Func_signup_check_password}>Check Password</button>
          <br></br>
          <br></br>

          <input type="text" placeholder="Nickname"onChange={e => setregister({ ...register, name: e.target.value })} value={register.name} />
          <button onClick={user_register}> Submit </button>
        </form>
      </div>
    </div>

  )
}

export default App;
