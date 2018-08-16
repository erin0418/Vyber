import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import SignIn from "./components/signin/signin";
import Home from "./components/home/home";
import Manage from "./components/manage/manage";
import Search from "./components/search/search";
import Tone from "./components/tone/tone";
import Personality from "./components/personality/personality";
import FaceReg from "./components/faceReq/face";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/tone" component={Tone} />
          <Route exact path="/personality" component={Personality} />
          <Route exact path="/face" component={FaceReg} />
          </div>
      </Router>
    );
  }
}

export default App;
