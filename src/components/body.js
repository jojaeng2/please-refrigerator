
import React , { useState ,useEffect} from "react";

import '../style/body.css';

// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn : true};
  
//       this.handleClick = this.handleClick.bind(this);
//     }
//     static handleClick() {
//       this.setState(state => ({
//           isToggleOn: !state.isToggleOn
//       }));
//     }
// }

class body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 'this'를 동작하게 하려면 바인딩이 필수적으로 들어가야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  render(){

  return (
        <>
            <button className = "toggle_btn" onClick={this.handleClick} > {this.state.isToggleOn ? 'Menu' : 'Ingredient'}
            </button>
            <input className = "search_bar" type = "text" placeholder="Search" ></input>
        </>
    )
  }
}

    
export default body;