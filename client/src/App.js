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
import Chat from "./components/chat/chat"
import Footer from "./components/footer/footer.js";

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
      .then(response => {
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
  handleAccountCreate = (email, fullname, username, password,) => {
    //used for account creation
    fetch("/api/usersCreate", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        fullname: fullname,
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
          <Route
            exact
            path="/home"
            render={() => {
              return (
                <Home
                  account={this.state.currentAccount}
                  handlePost={this.handlePost}
                  handleComment={this.handleComment}
                />
              );
            }}
          />

          <Route
            exact
            path="/search"
            render={() => {
              return <Search account={this.state.currentAccount} />;
            }}
          />
          < Route
          exact
          path = "/manage"
          render = {
            () => {
              return <Manage account = {
                this.state.currentAccount
              }
              />;
            }
          }
          />
          <Route exact path="/tone" component={Tone} />
          <Route exact path="/personality" component={Personality} />
          <Route exact path="/face" component={Face} />
          <Chat userName={this.state.currentAccount.username || "User"}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
