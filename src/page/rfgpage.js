import Func_filter_find_ingredient from "../components/rfgpage/filter";
import Func_filterresult_filterresult from "../components/rfgpage/filterresult";
import React, { useState, useEffect } from "react";

// import SearchResult from '../components/SearchResult';

function App({ history }) {
  const [toggle, settoggle] = useState(false);

  const Func_show_ingredient = () => {
      if (toggle == true) {
      return(
      <div className="rfg-body-form">
        <Func_filter_find_ingredient></Func_filter_find_ingredient>
      </div>
      );
      }
  }


  return (
    <>
    <div className="rfg-form">
      
      <div className="rfg-select-btn"><button className = "ingredient-toggle-btn" onClick= {()=>{settoggle(!toggle)}}>{ toggle ? "그만 담고 검색하기" : '내 냉장고에 재료 추가하기'}</button></div>
      {Func_show_ingredient()}
    </div>
    <div className="fg-result-box">
        <Func_filterresult_filterresult/>
    </div>
    </>
  );
}

export default App;
