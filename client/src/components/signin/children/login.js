import React from "react";
import { Link } from "react-router-dom";

const LogIn = props => (
  <div className="toneRouteForm">
    <div className="input-field">
    <input name="username" type="text" onChange={props.handleInputChange} />
    <label for="username" className="white-text" id ="p1">User Name</label>
    </div>
    <div className="input-field">
    <input name="password" type="text" onChange={props.handleInputChange} />
    <label for="username" className="white-text" id ="p1">Password</label>
    </div>
    <button class="submit btn amber lighten-5 waves-effect waves-orange"  onClick={props.handleAccountApp}>
      <Link to="/home"> Sign In </Link>
    </button>
  </div>
);

export default LogIn;