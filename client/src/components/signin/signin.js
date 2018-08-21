import React, { Component } from "react";
import UserCreate from "./children/usercreate.js";
import LogIn from "./children/login.js";

export default class SignIn extends Component {
  state = {
    page: "",
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
    this.props.handleAccountFunc(this.state.username, this.state.password);
  };
  handleAccountCreateApp = event => {
    //passes username and password to app for creation
    event.preventDefault();
    this.props.handleAccountCreateFunc(
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
    if (this.state.page === "Create Account") {
      return (
        <UserCreate
          handleInputChange={this.handleInputChange}
          handleAccountCreateApp={this.handleAccountCreateApp}
        />
      );
    } else if (this.state.page === "Sign In") {
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
      <div>
        <h1> select wether you want to sign in or create an account</h1>
        <div onClick={this.handleSelect}>Sign In</div>
        <div onClick={this.handleSelect}>Create Account</div>
        <div>{this.pageRender()}</div>
      </div>
    );
  }
}
