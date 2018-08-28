import React, { Component } from "react";
import UserCreate from "./children/usercreate.js";
import LogIn from "./children/login.js";
import "./signin.css";
import VyberScreens from "./VyberScreens.png";

export default class SignIn extends Component {
  state = {
    page: "",
    email:"",
    fullname:"",
    username: "",
    password: ""
  };
  handleInputChange = event => {
    //used for setting username and password states
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  handleAccountApp = event => {
    //passes username to app for sign in
    event.preventDefault();
    this.props.handleAccountFunc(this.state.username,this.state.password);
  };
  handleAccountCreateApp = event => {
    //passes username and password to app for creation
    event.preventDefault();
    this.props.handleAccountCreateFunc(
      this.state.email,
      this.state.fullname,
      this.state.username,
      this.state.password
    );
  };
  handleSelect = event => {
    //toggles sign in page between login or create account
    this.setState({
      page: event.target.innerText
    });
  };
  pageRender = () => {
    //this is triggered by out handleSelectFunc and renders the
    // page the client has called for
    if (this.state.page === "CREATE ACCOUNT") {
      return (
        <UserCreate
          handleInputChange={this.handleInputChange}
          handleAccountCreateApp={this.handleAccountCreateApp}
        />
      );
    } else if (this.state.page === "SIGN IN") {
      return (
        <LogIn
          handleInputChange={this.handleInputChange}
          handleAccountApp={this.handleAccountApp}
        />
      );
    }
  };
  render() {
    return (
      <div className="signinBody navShift">
        <h3 className="center white-text">VYBER</h3>
        <br/>
        <div className="signInDiv" onClick={this.handleSelect}>SIGN IN</div>
        <div className="createDiv" onClick={this.handleSelect}>CREATE ACCOUNT</div>
        <br/>
        <div>{this.pageRender()}</div>
        <img className="signinPic" alt="Vyber Screens" src={VyberScreens} />
      </div>
    );
  }
}
