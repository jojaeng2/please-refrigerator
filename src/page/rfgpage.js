import Func_filter_find_ingredient from "../components/rfgpage/filter";
import React, { useState, useEffect } from "react";

// import SearchResult from '../components/SearchResult';

function App({ history }) {
  const [toggle, settoggle] = useState(false);
  const igd_list = {
    meat: ['닭', '오리', '돼지', '소', '소세지'],
    vegetable: ['양파', '당근', '마늘', '버섯', '부추', '고추', '파', '상추', '토마토'],
    seafood: ['새우', '고등어', '게', '전복', '조개', '바지락', '홍합', '오징어', '생선', '멸치'],
    source: ['간장', '된장', '고추장', '쌈장', '참기름', '깨', '가루'],
    carbo: ['면', '밀가루', '밥'],
    dairyproduct: ['계란', '우유', '치즈', '요거트']
  };




  return (
    <div className="rfg-form">
      {/* rfg 파일 body로 넣기 */}
      <div className="rfg-body-form">
        <Func_filter_find_ingredient igd_list={igd_list}></Func_filter_find_ingredient>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
