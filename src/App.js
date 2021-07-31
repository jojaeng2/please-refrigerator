import React from "react";
import { HashRouter as Router,Route } from 'react-router-dom';
import signup from './page/signup';
import mainpage from './page/mainpage';
import rfgpage from './page/rfgpage';

const App = () => {

  return (
    <div>
      <Router>
      <React.Fragment>
          <Route exact path="/" component={mainpage}/>
          {/* 라우트에서는 ? 따로 명시 안해줘도 자동으로 히스토리가 전달되서 사인업으로 가  */}
          {/*  */}
          <Route path="/signup" component={signup}/>
          <Route path="/rfgpage" component={rfgpage}/>
          
          </React.Fragment>
      </Router>
    </div >
  )
}

export default App;