import pork from "./../img/pork.jpg";
import beef from "./../img/beef.jpg";
import duck from "./../img/duck.jpg";
import chicken from "./../img/chicken.jpg";
import gochujang from "./../img/gochujang.jpg";
import ganjang from "./../img/ganjang.jpg";
import gul from "./../img/gul.jpg";
import moolyut from "./../img/moolyut.jpg";
import ramen from "./../img/ramen.jpg";
import somen from "./../img/somen.jpg";
import udong from "./../img/udong.jpg";
import dangmen from "./../img/dangmen.jpg";
import pa from "./../img/pa.jpg";
import carrot from "./../img/carrot.jpg";
import gochu from "./../img/gochu.jpg";
import onion from "./../img/onion.jpg";

import Func_filterbutton_find_button from "./filterbutton";
import {useEffect, useState} from "react";
import '../style/FilterFinder.css';

function Func_filter_find_ingredient() {

    const [meat, setMeat] = useState([{url: pork, name: "돼지고기"}, {url: beef, name: "소고기"}, {url: duck, name: "오리고기"}, {url: chicken, name: "닭고기"}]);
    const [condiments, setcondiments] = useState([{url: gochujang, name: "고추장"}, {url: ganjang, name: "간장"}, {url: gul, name: "굴소스"}, {url: moolyut, name: "물엿"}]);
    const [noodles, setnoodles] = useState([{url: ramen, name: "라면"}, {url: somen, name: "소면"}, {url: udong, name: "우동"}, {url: dangmen, name: "당면"}]);
    const [vegetables, setVegetables] = useState([{url: pa, name: "대파"}, {url: carrot, name: "당근"}, {url: gochu, name: "고추"}, {url: onion, name: "양파"}]);

    const [basket, setbasket] = useState([]);
    const [evt, setevt] = useState([]);

    const basketInput = (Item,e,href) => {
        
        if (basket.includes(Item)) {
            setbasket(basket.filter(i => i!==Item));
            setevt(evt.filter(i => i!==href));
        } else {
            setbasket([...basket, Item]);
            setevt([...evt, href]);
        }
        console.log(basket);
    }

    useEffect(()=>{
        console.log(evt)
    },[evt])

    return (
        <div>
        <section>
            <h1 id="line">Meat</h1>
            <div>{meat.map((v) => <Func_filterbutton_find_button basketInput={basketInput} href={v.url} Item={v.name}></Func_filterbutton_find_button>)}</div>
            <h1 id="line">Condiments</h1>
            <div>{condiments.map((v) => <Func_filterbutton_find_button basketInput={basketInput} href={v.url} Item={v.name}></Func_filterbutton_find_button>)}</div>
            <h1 id="line">Noodles</h1>
            <div>{noodles.map((v) => <Func_filterbutton_find_button basketInput={basketInput} href={v.url} Item={v.name}></Func_filterbutton_find_button>)}</div>
            <h1 id="line">Vegetables</h1>
            <div>{vegetables.map((v) => <Func_filterbutton_find_button basketInput={basketInput} href={v.url} Item={v.name}></Func_filterbutton_find_button>)}</div>
        </section>
        <div>
            {evt.map((v) => <li><img src={v}/></li>)}
        </div>
        </div>
    );
}

export default Func_filter_find_ingredient;