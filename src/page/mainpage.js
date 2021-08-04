import React, { useState, useEffect } from "react";
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import Footer from '../components/mainpage/footer';
import Aside from '../components/mainpage/aside';
import Axios from 'axios';


const App = ({ history }) => {
    // 히스토리를 받았어 (프롭스로)
    const [table, settable] = useState();
    const [text, settext] = useState('');
    const [ftable,setftable] = useState();

    useEffect(() => {
        GetTable()
    }, [])

    const GetTable = () => {
        console.log('눌렀습니다.')
        Axios.post("https://qkrtmfqls.gabia.io/gettable", {
        })
            .then((response) => {
                settable(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        let count = 0
        if (text != '') {
            const arr = []
            table && table.map((v)=> v.FoodN.includes(text) ? arr.push(v) : 0)
            // table && table.map((v) => v.FoodN.includes(text) ? (count += 1, count < 9 && count > 0 ? console.log(v.FoodN) : 0) : 0)
            setftable(arr)
            // console.log(arr)
        }
    }, [text])


    return (
        <>
            <div className="body-form">
                <Body settext={settext} text={text} history={history} />
            </div>
            <div className="footer-form">
                <Footer showtable={ftable} />
            </div>
            <div className="aside-form">
                <Aside />
            </div>
        </>
    )
}

export default App;