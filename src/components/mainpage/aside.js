
import React , { useState } from "react";
import '../../style/mainpage/aside/aside.css';
// import this_aside_show_addimg1 from "../../img/addimg1.jpg";
// import this_aside_show_addimg2 from "../../img/addimg2.jpg";
// import Test_video from "../../img/Summer - 24541.mp4";

const Aside = () => {

  const [name, setname] = useState('');
  
  return (
    
    <div className="aside-form">
      {/* <video 
        id="vid" 
        src = {Test_video} 
        muted="muted"
        width="330" 
        height="200" 
        autoplay = "autoplay"
        loop = "loop">
      </video>

      <img className="aside-form-img" 
        src = {this_aside_show_addimg2} 
        width = "330" 
        height = "280">
      </img>

      <img className="aside-form-img" 
        src = {this_aside_show_addimg1} 
        width = "270" 
        height = "280">
      </img> */}

    </div>
  )
}
    
export default Aside;