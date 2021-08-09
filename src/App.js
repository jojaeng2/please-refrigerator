import React, { useState,useEffect } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import signup from './page/register';
import mainpage from './page/mainpage';
import rfgpage from './page/rfgpage';
import Header from './page/header';
import Profile from './page/category/profile';
import introduce from './page/category/introduce';
import noticepage from './page/category/noticepage';
import writeform from './components/noticepage/writeform';
import Recipe from './page/recipe';



const App = () => {
  const [this_header_set_inputs, setthis_header_set_inputs] = useState({ id: "", pwd: "" });
  const [information,setinformation] = useState({id :'',nickname:''})

  useEffect(()=>{
    console.log(information)
  },[information])
  return (
    <div className="main-form">
      <Router>
        <Route render={({ location, history ,render}) => (
          <React.Fragment>
            <Header information={information} setinformation={setinformation}this_header_set_inputs={this_header_set_inputs} setthis_header_set_inputs={setthis_header_set_inputs} history={history} />
            <Route exact path="/" this_header_set_inputs={this_header_set_inputs} setthis_header_set_inputs={setthis_header_set_inputs} component={mainpage} />
            {/* 라우트에서는 ? 따로 명시 안해줘도 자동으로 히스토리가 전달되서 사인업으로 가  */}
            <Route path="/rfgpage" component={rfgpage} />
            <Route path="/signup" component={signup} />
            <Route exact path="/recipe/:id" component={Recipe} >
              <Recipe location={location} ></Recipe>
            </Route>
            <Route  path="/profile"exact component={Profile} >
            </Route>
            <Route path="/introduce" component={introduce} />
            <Route path="/noticepage" component={noticepage} />
            <Route path="/writeform" component={writeform} />
          </React.Fragment>
        )}
        />
      </Router>
    </div >
  )
}

export default App;