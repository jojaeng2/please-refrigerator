// import React, { useEffect, useState } from "react";

// const App = ({history}) => {
//     const [this_login_set_inputs,setthis_login_set_inputs] = useState({
//         id: "",
//         pwd: ""
//     });

//     const { id, pwd } = this_login_set_inputs; // 비구조화 할당을 통해 값 추출
    
//     const Func_login_check_iscorrect = () => {
//         console.log("아이디비번 맞는지 체크하셈")
//         if (id ==="1234" || pwd === "1234")
//             console.log("일치한다.")
//         else
//             console.log("틀렸다.")   
//     };
    

//     const Func_login_move_signUp = () =>{
//         console.log("회원가입 페이지로 이동")
//         history.push('/signup');
//     }

//     return (
//         <div class="login-page">
//             <h1>로그인 페이지</h1>
//             <div class="form"> 
//                 <form class="login-form">
                                
//                 <input name = "id" type="text" placeholder="id"  onChange ={e => setthis_login_set_inputs({...this_login_set_inputs, id : e.target.value})} value = {this_login_set_inputs.id} />               
//                 <input name = "pwd" type="text" placeholder="password"  onChange ={e => setthis_login_set_inputs({...this_login_set_inputs, pwd : e.target.value})} value = {this_login_set_inputs.pwd} />                    

//                 <button onClick={Func_login_check_iscorrect}>login</button>
//                 <p> 아이디가 없으세요 ? </p>
//                 <button onClick={()=> Func_login_move_signUp()}>회원가입</button>
//                 </form>
//             </div>
//         </div>
//    )
// }

// export default App;