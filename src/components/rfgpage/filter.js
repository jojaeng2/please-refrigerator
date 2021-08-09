import ingredient_img from "../../img/ingredient_img/ingredient-img";
import { useEffect, useState, Component } from "react";
import '../../style/rfgpage/rfg.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import moment from 'moment'

function Func_filter_find_ingredient() {

    //date날짜, result_box_list는 오른쪽의 장바구니에 들어있는 리스트, 
    const [date,setdate] = useState(new Date());
    const [result_box_list, setresult_box_list] = useState([]);
    const [igdlist,setigdlist] = useState();;

    const igd_key_value = ['닭','오리','돼지','소','소세지','양파','당근','마늘','버섯','부추','고추','파','상추','토마토','새우','고등어','게','전복','조개','바지락','홍합','오징어','생선','멸치','간장','된장','고추장','쌈장','참기름','깨', '가루','면','밀가루','밥','계란','우유','치즈','요거트'];
    igd_key_value.sort(() => Math.random() - 0.5);
    
    const Func_igdlist_select = ((e)=> {
        document.querySelector('.rfg-calendar-box').classList.toggle('calendar-toggle');
    })
    
    const basketInput = () => {
        const select_eprdate = moment(date).format('YY-MM-DD');
        let check = true
        result_box_list.map((v)=>v.result_igdname == igdlist ? check=false: 0)
        if(check){
            setresult_box_list([...result_box_list,{result_igdname : igdlist ,eprd: select_eprdate}]);
        }
        Func_igdlist_select();
    }

    const result_basket = (src) => {
        setresult_box_list(result_box_list.filter(i => i.result_igdname !== src));
        //누르면 지워지게
        //post 버튼을 누르면 result_basket에 들어있는걸 백에 넘겨준다.
    }

    //submit 클릭시 기존의 result_box_list를 초기화하고 새롭게 insert하는 DI 쿼리 날림
    const Func_reqbutton_diquery = (e) => {
        let igdarr = "", eprarr = "";
        result_box_list.map((v)=> {
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
            
        })
        .catch((error)=> {
            console.log(error);
        });
    } 

    //get 버튼을 클릭시 DB에 저장된 재료리스트 불러옴
    const Func_reqbutton_getquery = (e) => {
        Axios.post("http://localhost:3001/getrfg", {
            id: 2345
        })
        .then((response)=> {
            let res_igdname = response.data[0].Igdname.split(",");
            let res_eprname = response.data[0].Eprdate.split(",");
            let new_igdname =[];
            res_igdname && res_igdname.map((v,index)=> v !== '' ? new_igdname.push({result_igdname : v, eprd : res_eprname[index]}) : 0);
            setresult_box_list(new_igdname);

        })
        .catch((error)=> {
            console.log(error);
        });
    }
        
    useEffect(()=> {
        Func_reqbutton_getquery();
    }, []);
    
    useEffect(() => {

    }, [result_box_list])

    useEffect(()=>{
        igdlist && basketInput();
    },[date])
    
    const clickimg = (item)=>{
        setigdlist(item);
        Func_igdlist_select();
    }

    const Select_ingredient_thumbnail = () => {
        return (
            igd_key_value.map((v) => {
                return (
                    <div className="ingredient-form">
                        <div className="ingredient-img-form" role="button" onClick={(e) => { clickimg(v) }}>
                            <img className="ingredient-img" src={ingredient_img[v]} alt={v} />
                        </div>
                        <div className="ingredient-name-form">
                            <span className="ingredient-name" children={v}></span>
                        </div>
                    </div>
                )
            })
        )
    }
 

    const Result_ingredient_thumbnail = () => {
        return (
            result_box_list.map(({result_igdname}) => {
                return (
                    <div className="rfg-result-form" role="button" onClick={()=>{result_basket(result_igdname)}}>
                        <div className="rfg-result-img-form">
                            <img className="ingredient-img" src={ingredient_img[result_igdname]} alt={result_igdname}/>
                        </div>
                        <div className="rfg-result-name-form">
                            <span className="ingredient-name" children={result_igdname}>{result_igdname}</span>
                        </div>
                    </div> 
            
                )
            })
        )
    }

    return (
        <>  
            <div className="rfg-calendar-box">
                <Calendar onChange={setdate} value={date}/> 
            </div>
            <div className="rfg-ingredient-box">                
                <Select_ingredient_thumbnail/>
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
                    <Result_ingredient_thumbnail/>               
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