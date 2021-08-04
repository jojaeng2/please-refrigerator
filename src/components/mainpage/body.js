
import React , { useState ,useEffect} from "react";
import this_body_show_searchimg from "../../img/search_img2.png";
import '../../style/mainpage/body/body.css';
const Body = ({history,text,settext}) => {

  const [toggle, settoggle] = useState(true);


  const Func_click_search_btn = (e) => {
    alert("Click the Btn")
  }
  //gettable


  
  const onKeyPress = (e) => {
    if (e.key == 'Enter'){
      Func_click_search_btn();
    }
  }

  return (
    <>
        <button className = "toggle_btn" onClick= {()=>{settoggle(!toggle)}} > { toggle ? 'Menu' : 'Ingredient'} </button>
        <input className = "search_bar" onChange={e=>settext(e.target.value)} value={text} onKeyPress = {onKeyPress} type = "text" placeholder="     Search"></input>
        <button className = "search_btn"  onClick= {Func_click_search_btn} > <img align="center" src={this_body_show_searchimg} width='80' height='80' />
        </button>
    </>
  )
}
    
export default Body;