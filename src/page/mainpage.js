import React, { useState, useEffect } from "react";
//이거 대문자로 해야함!!
import Body from '../components/mainpage/body';
import Footer from '../components/mainpage/footer';
import Aside from '../components/mainpage/aside';
import Axios from 'axios';


// import img1 from '../page/img/num1.jpeg'
// import img2 from '../page/img/num2.jpeg'
// import img3 from '../page/img/num3.jpeg'
// import img4 from '../page/img/num4.jpeg'
// import img5 from '../page/img/num5.jpeg'


const App = ({ history }) => {
    // 히스토리를 받았어 (프롭스로)
    const [table, settable] = useState();
    const [text, settext] = useState('');
    const [ftable,setftable] = useState();

    const gettable = () => {
        if (text != '') {
            Axios.post("http://qkrtmfqls.gabia.io/gettable", {
                id: text
            })
                .then((response) => {
                    setftable(response.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <>
            <div className="body-form">
                <Body gettable={gettable} settext={settext} text={text} history={history} />
                {/* <div>
                <img className="profile-img">{img1}</img>
                <img className="profile-img">{img2}</img>
                <img className="profile-img">{img3}</img>
                <img className="profile-img">{img4}</img>
                <img className="profile-img">{img5}</img>
                </div> */}
            </div>
            <div className="footer-form">
                <Footer ftable={ftable} history={history} />
            </div>
            <div className="aside-form">
                <Aside />
            </div>
        </>
    )
}

export default App;