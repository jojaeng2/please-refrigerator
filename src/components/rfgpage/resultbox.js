import "../../style/rfgpage/rfg.css";
import meat from "../../img/ingredient/meat.jpg";
import vegetable from "../../img/ingredient/vegetable.jpg";
import seafood from "../../img/ingredient/seafood.jpg";
import source from "../../img/ingredient/source.jpg";
import carbo from "../../img/ingredient/carbo.jpg";
import dairyproduct from "../../img/ingredient/dairyproduct.jpg";

function Func_filterbutton_find_button({src, result_basket, item}) {
    const src2 = src
    const igd_key_value = { 
        '닭' : meat,
        '오리' : meat,
        '돼지' : meat,
        '소' : meat,
        '소세지' : meat,
        '양파' : vegetable,
        '당근' : vegetable,
        '마늘' : vegetable,
        '버섯' : vegetable,
        '부추' : vegetable,
        '고추' : vegetable,
        '파' : vegetable,
        '상추' : vegetable,
        '토마토' : vegetable,
        '새우' : seafood,
        '고등어' : seafood,
        '게' : seafood,
        '전복' : seafood,
        '조개' : seafood,
        '바지락' : seafood,
        '홍합' : seafood,
        '오징어' : seafood,
        '생선' : seafood,
        '멸치' : seafood,
        '간장' : source,
        '된장' : source,
        '고추장' : source,
        '쌈장' : source,
        '참기름' : source,
        '깨' : source, 
        '가루' : source,
        '면' : carbo,
        '밀가루' : carbo,
        '밥' : carbo,
        '계란' : dairyproduct,
        '우유' : dairyproduct,
        '치즈' : dairyproduct,
        '요거트': dairyproduct
      }
      src = igd_key_value[src]
    return (
        <div className="rfg-result-form" role="button" onClick={()=>{result_basket(src2)}}>
            <div className="rfg-result-img-form">
                <img className="ingredient-img" src={src} alt={item}/>
            </div>
            <div className="rfg-result-name-form">
                <span className="ingredient-name" children={item}>{src2}</span>
            </div>
        </div> 

    );
}

export default Func_filterbutton_find_button;