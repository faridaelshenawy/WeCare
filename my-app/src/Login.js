import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import './Login.css';

import { Redirect } from 'react-router-dom'

import {Button, Modal, ModalFooter, Col, Row, Container} from 'react-bootstrap'

 

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      layoutName: "default",
      input: "",
      input2:""
  }
}

onChange = input => {
  this.setState({ input });
  console.log("Input changed", input);
};

onKeyPress = button => {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") this.handleShift();
};

handleShift = () => {
  const layoutName = this.state.layoutName;

  this.setState({
    layoutName: layoutName === "default" ? "shift" : "default"
  });
};
onChangeInput = event => {
  const input = event.target.value;
  this.setState({ input });
  this.keyboard.setInput(input);
};
onChange_Input = event => {
  const input2 = event.target.value;
  this.setState({ input2 });
  this.keyboard.setInput(input2);
};


  



render() {
  
        
    return (
      <div className="all">
       <div class="input-container">
      <div className="First">
      <label className="email">Email</label>
      <input className="emailIn"
          value={this.state.input}
          placeholder={"Please Enter your Email"}
          onChange={this.onChangeInput}/>
		  </div>		
	</div>
  <div class="input-container">	
      <div className="second">
      <label className="pass">Password</label>	
      <input className="passIn" 
        type="password" 
        value={this.state.input2}
          placeholder={"Please Enter your Password"}
          onChange={this.onChange_Input}
          />
           <Button className="login"variant="danger" >Login</Button>
      </div>
      </div>
      <div className="keyBoard">
        <Keyboard
          keyboardRef={r => (this.keyboard = r)}
          layoutName={this.state.layoutName}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        </div>
      </div>

      
    );
  }
}


export default Login;
