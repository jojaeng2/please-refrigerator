import React , { useState } from "react";

import Header from '../components/header';
//이거 대문자로 해야함!!
import Body from '../components/body';
import Footer from '../components/footer';

const App = ({history}) => {
    // 히스토리를 받았어 (프롭스로)
    const [this_header_set_inputs,setthis_header_set_inputs] = useState({id: "",pwd: ""});
    return (
        <>
            <div className="header-form">
            <Header this_header_set_inputs={this_header_set_inputs} setthis_header_set_inputs={setthis_header_set_inputs}  history={history}/>
            {/* <Header> => 이상태면? 헤더엣 히스토리를 받은적이 없어 */}
            </div>
            <div className="body-form">
            <Body />
            </div>
            <div className="footer-form">
            <Footer />
            </div>
        </>
    )
}

export default App;