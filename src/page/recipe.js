import React, { useState, useEffect } from "react";
import Thumbnail_info from "../components/recipe/tbninfo";
import Recipe_info from "../components/recipe/rcpinfo";

//이거 대문자로 해야함!!
import Axios from 'axios';


const App = ({ location, history, match, recipe_set_page}) => {
    const foodid = location.pathname.split('pe/')[1];
    const [data,setdata] = useState([]);
    
    
    useEffect(()=>{
        Axios.post("http://qkrtmfqls.gabia.io/getrcp/" + foodid, {
            id: foodid
        })
            .then((response) => {
                setdata(response.data);
            })
            .catch((error) => {
                console.log(error); 
            });
    },[])
    return (
        <div>
            {data != '' ? <Thumbnail_info data={data} ></Thumbnail_info> : ''}
            {data && <Recipe_info data={data} ></Recipe_info>}
        </div>
    )
}

export default App;
