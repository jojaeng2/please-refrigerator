import meat from "../../img/ingredient/meat.jpg";
import vegetable from "../../img/ingredient/vegetable.jpg";
import seafood from "../../img/ingredient/seafood.jpg";
import source from "../../img/ingredient/source.jpg";
import carbo from "../../img/ingredient/carbo.jpg";
import dairyproduct from "../../img/ingredient/dairyproduct.jpg";
import Func_filterbutton_find_button from "./filterbutton";
import Func_filterbutton_result_box from "./resultbox";
import { useEffect, useState, Component } from "react";
import '../../style/rfgpage/rfg.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import moment from 'moment'


function Func_filter_find_ingredient({igd_list}) {
    const [show,setShow] = useState(false)
    const [date,setdate] = useState(new Date());
    const [basket, setbasket] = useState([]);
    const [evt, setevt] = useState([]);
    const [toggle, settoggle] = useState(false);
    const [idg,setidg] = useState();;

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
    
    const Func_idg_select = ((e)=> {
        document.querySelector('.rfg-calendar-box').classList.toggle('calendar-toggle');
    })
    
    const basketInput = () => {
        const date2  = moment(date).format('YY-MM-DD');
        let check = true
        evt.map((v)=>v.idg==idg ? check=false: 0)
        if(check){
            console.log('idg',idg)
            setevt([...evt,{idg:idg ,eprd:date2}]);
        }
        Func_idg_select();

        // if (basket.includes(item)) {
        //     setbasket(basket.filter(i => i !== item));
        //     setevt(evt.filter(i => i !== src));
        // } else {
        //     setbasket([...basket, item]);
        //     setevt([...evt, src]);
        // }
        //onclick시 달력이 펼쳐지게
    }

    const result_basket = (src) => {
        console.log(src);
        setevt(evt.filter(i => i.idg !== src));
        //누르면 지워지게
        //post 버튼을 누르면 result_basket에 들어있는걸 백에 넘겨준다.
    }

    const Func_reqbutton_diquery = (e) => {
        let igdarr = "", eprarr = "";
        evt.map((v)=> {
            igdarr += v.idg;
            igdarr += ',';
            eprarr += v.eprd;
            eprarr += ',';
        });
        // console.log(igdarr);
        Axios.post("http://localhost:3001/individual", {
            id: 2345 ,
            igdname : igdarr,
            eprdate: eprarr,
        })
        .then((response)=> {
            console.log(response);
            
        })
        .catch((error)=> {
            console.log(error);
        });
    } 

    const Func_reqbutton_getquery = (e) => {
        Axios.post("http://localhost:3001/getrfg", {
            id: 2345
        })
        .then((response)=> {
            console.log(response.data[0]);
            let igdname = response.data[0].Igdname.split(",");
            let eprname = response.data[0].Eprdate.split(",");
            console.log('igd = ',igdname)
            let idgname2 =[]
            igdname && igdname.map((v,index)=> v !== '' ? idgname2.push({idg:v,eprd : eprname[index]}) : 0);
            setevt(idgname2)

        })
        .catch((error)=> {
            console.log(error);
        });
    }
        
    useEffect(()=> {
        Func_reqbutton_getquery();
    }, []);
    
    useEffect(() => {
        console.log('evt = ',evt)
    }, [evt])
    useEffect(()=>{
     idg && basketInput()
    },[date])

    return (
        <>
            <div className="rfg-calendar-box">
                <Calendar onChange={setdate} value={date}/> 
            </div>
            <div className="rfg-ingredient-box">                
                {igd_list.meat.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={meat} item={v}></Func_filterbutton_find_button>)}
                {igd_list.vegetable.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={vegetable} item={v}></Func_filterbutton_find_button>)}
                {igd_list.seafood.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={seafood} item={v}></Func_filterbutton_find_button>)}
                {igd_list.source.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={source} item={v}></Func_filterbutton_find_button>)}
                {igd_list.carbo.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={carbo} item={v}></Func_filterbutton_find_button>)}
                {igd_list.dairyproduct.map((v) => <Func_filterbutton_find_button onClick={Func_idg_select} setidg={setidg} basketInput={basketInput} src={dairyproduct} item={v}></Func_filterbutton_find_button>)}
            </div>


            {/* v가 재료고 재료별로 클릭시 해당 v와 상대적인 위치에 달력을 보영주는거. 토클을 v한테 줘서 처음에는 전부 달력을 안가져오는 toggle 다줘.
            클릭시 focus시 그 v만 달력을 부르도록 toggle을 바꿔줘. 

            달력 componet에서 날짜를 클릭 -> result box에 넣는거잖아.
            달력 component는 날짜가 클릭될때 해당 v의 value값을 가져올 수있어야 함. 그리고 이 
            value , 
            선택 날짜를 같이 result_box로 넣어줘야함.

            이미지를 클릭했을떄 토글을 바꾸는게 아니라 true로 바꾸고
            나머지를 클릭했을땐 false로 바꾸고
            위치를 클릭한거 기준으로 위치 조정이 된다면 좋은데
            냉장고로 넘어갈때 달력 value랑 클릭했던 재료 값이랑 같이 넘겨주면
            
            class toggle 재료별로 달력 div를 하위에 넣고 toggle로 on-off하면 되잖아?
            달력을 component로 만들 수있다면? -> onClick 시 달력 component를 불러오는.
            <달력 /> 토글을 여기선언  */}
            <div className="rfg-result-box">
                <div className="rfg-select-box">
                    {/*  버튼 클릭시 보여지는 페이지*/}
                    {evt.map((v) => <Func_filterbutton_result_box result_basket={result_basket} src={v.idg} />)}                
                </div>
                <div className="rfg-select-btn">
                    <button onClick={()=> Func_reqbutton_diquery()}>submit</button> 
                    <button onClick={()=> Func_reqbutton_getquery()}>get</button>
                </div>
            </div>
        </>
    );
}

export default Func_filter_find_ingredient;