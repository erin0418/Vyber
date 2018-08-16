import React, { Component } from "react";
import "./App.css";
import User from "./components/userTest/user";
import Form from "./components/formTest/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="usersFromDataBase">
          <User />
        </div>
        <div className="formsCallingOurRoutes">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
