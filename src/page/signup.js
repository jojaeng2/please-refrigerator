import React from "react";
import '../style/signup.css';

function App({ history, setthis_signup_set_inputs, this_signup_set_inputs }) {
  // state = {
  //   name: '',
  //   ,
  // };
  // 전달안해줬는데 여기서 히스토리 받았자나 그럼 안되지

  const Func_signup_check_succecss = () =>{
    console.log("회원가입 성공")
    history.push('/');

  }

  const Func_signup_check_password = (e) =>{
        e.preventDefault();
        // 버튼을 누를시 수행하는 고유 동작을 중단시킴

        console.log("아이디비번 맞는지 체크하셈")
        if (this_signup_set_inputs.pwd === this_signup_set_inputs.pwd_check ) alert("일치합니다.")
        // 로그인 성공 했을때에만 냉장고 버튼 생기게 해줘야 함
        // 로그인 안하면 ( 쿠키 없을 때 ) 버튼 생기면 안됨
        
        else alert("비밀번호를 한번 더 확인하세요.")

  }  

  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <h1>Sign Up</h1>
          <input type="text" placeholder="ID"/>
          <input type="password" placeholder="Password"/>
        {/* onChange={e => setthis_signup_set_inputs({ ...this_signup_set_inputs, pwd: e.target.value })} value={setthis_signup_set_inputs.pwd}/> */}
          <input type="password" placeholder="Check Password" />
          {/* onChange={e => setthis_signup_set_inputs({ ...this_signup_set_inputs, pwd_check: e.target.value })} value={setthis_signup_set_inputs.pwd_check}/> */}
          <button onClick={Func_signup_check_password}>Check Password</button>
          <br></br>
          <br></br>
          
          <input type="text" placeholder="Nickname"/>
          <input type="text" placeholder="E-mail"/>
          <button onClick={Func_signup_check_succecss}> Submit </button>      
        </form>
      </div>  
    </div>  
    
  )
}

export default App;
