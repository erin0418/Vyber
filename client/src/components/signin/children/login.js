import React from "react";
import { Link } from "react-router-dom";

const LogIn = props => (
  <div className="toneRouteForm">
    <input name="username" type="text" onChange={props.handleInputChange} />
    <input name="password" type="text" onChange={props.handleInputChange} />
    <button onClick={props.handleAccountApp}>
      <Link to="/home"> Sign In </Link>
    </button>
  </div>
);

export default LogIn;
