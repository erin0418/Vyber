import React from "react";
import { Link } from "react-router-dom";

const UserCreate = props => (
  <div className="toneRouteForm">
    <input name="username" type="text" onChange={props.handleInputChange} />
    <input name="password" type="text" onChange={props.handleInputChange} />
    <button onClick={props.handleAccountCreateApp}>
      <Link to="/home"> Create Account </Link>
    </button>
  </div>
);

export default UserCreate;
