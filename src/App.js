import React, { useState } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import signup from './page/register';
// import mainpage from './page/mainpage';
// import rfgpage from './page/rfgpage';
import mainpage from './page/mainpage';
import rfgpage from './page/rfgpage';
import Header from './page/header'


const App = () => {
  const [this_header_set_inputs, setthis_header_set_inputs] = useState({ id: "", pwd: "" });

  return (
    <div className="main-form">
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <Header this_header_set_inputs={this_header_set_inputs} setthis_header_set_inputs={setthis_header_set_inputs} history={history} />
            <Route exact path="/" this_header_set_inputs={this_header_set_inputs} setthis_header_set_inputs={setthis_header_set_inputs} component={mainpage} />
            {/* 라우트에서는 ? 따로 명시 안해줘도 자동으로 히스토리가 전달되서 사인업으로 가  */}
            <Route path="/rfgpage" component={rfgpage} />
            <Route path="/signup" component={signup} />
          </React.Fragment>
        )}
        />
      </Router>
    </div >
  )
}

export default App;