import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserCreate from './children/usercreate.js';
import LogIn from './children/login.js'

export default class SignIn extends Component {
  state = {
    page: ""
  }
  handleInputLogIn = ()=>{
    // sign in
  }
  handleInputCreate = () => {
    // create a user
  }
  handleSelect = (event)=>{
    this.setState({page: event.target.innerText})   
  }
  pageRender = ()=>{
    if (this.state.page === "Create Account") {
      return <UserCreate handleInputCreate={this.handleInputCreate} />
    } else if (this.state.page === "Sign In") {
      return <LogIn handleInputLogIn={this.handleInputSignIn} />
    }
  }
  render() {
    return <div>
        <h1> select wether you want to sign in or create an account </h1>
        <div onClick={this.handleSelect}>Sign In</div>
        <div onClick={this.handleSelect}>Create Account</div>
        <div>{this.pageRender()}</div>
      </div>;
  }
}



// this will need to link the person to HOME on completion

//  <Link
// to = "/home" >
//   >
//   go to home page < /Link> 