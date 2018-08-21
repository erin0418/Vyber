import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import SignIn from "./components/signin/signin";
import Home from "./components/home/home";
import Manage from "./components/manage/manage";
import Search from "./components/search/search";
import Tone from "./components/tone/tone";
import Personality from "./components/personality/personality";
import Face from "./components/face/face.js";

class App extends Component {
  state = {
    currentAccount: []
  };
  handleAccount = (username, password) => {
    //used for logging in
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: username
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response, password) => {
        return response.json();
      })
      .then(body => {
        console.log(body.password, password);
        if (body.password == password) {
          this.setState({ currentAccount: body });
        } else {
          alert("your username or password was incorrect!");
        }
      });
  };
  handleAccountCreate = (username, password) => {
    //used for account creation
    fetch("/api/usersCreate", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({ currentAccount: body });
      });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <SignIn
                  handleAccountFunc={this.handleAccount}
                  handleAccountCreateFunc={this.handleAccountCreate}
                />
              );
            }}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/tone" component={Tone} />
          <Route exact path="/personality" component={Personality} />
          <Route exact path="/face" component={Face} />
        </div>
      </Router>
    );
  }
}

export default App;
