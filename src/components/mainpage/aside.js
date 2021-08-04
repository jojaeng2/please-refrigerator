
import React , { useState } from "react";
import '../../style/mainpage/aside/aside.css';
import this_aside_show_addimg from "../../img/addimg.jpg";

const Aside = () => {

  return (
    <div className="aside-form">
        <img  align="center" src={this_aside_show_addimg} width='250' height='300' />
    </div>
  )
}
    
export default Aside;