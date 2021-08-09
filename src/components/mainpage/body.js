import React , { useState ,useEffect} from "react";
import this_body_show_searchimg from "../../img/main_body_img/search_img2.png";
import this_body_menu_logo from "../../img/main_body_img/body-menu-logo.png";
import this_body_ingredient_logo from "../../img/main_body_img/body-ingredient-logo.png";

import '../../style/mainpage/body/body.css';
const Body = ({text,settext,gettable}) => {

  const [toggle, settoggle] = useState(true);

  const Func_click_search_btn = (e) => {
    alert("Click the Btn")
  }
  //gettable

  const onKeyPress = (e) => {
    // 검색 버튼 안누르고 엔터만 눌러도 바로 검색 되게 했음
    if (e.key == 'Enter'){
      Func_click_search_btn();
    }
  }

  return (
    <div className="body-box" >
        <button className = "toggle_btn" onClick= {()=>{settoggle(!toggle)}} > 
            { toggle ? <img className = "toggle_img" align="center" src={this_body_menu_logo} width='100' height='80' />   : 
        <img className = "toggle_img" align="center" src={this_body_ingredient_logo} width='136' height='80' /> }
        </button>
  
        <input className="search_bar" onChange={e => settext(e.target.value)} value={text} onKeyPress={()=>gettable()} type="text" placeholder="     Search"></input>
      <button className="search_btn" onClick={()=>gettable()} > <img align="center" src={this_body_show_searchimg} width='80' height='80' /></button>

    </div>
  )
}
    
export default Body;