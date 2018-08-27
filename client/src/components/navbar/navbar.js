import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLogo from "./vyber_nav_logo.png";
import "./navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper amber darken-1">
            <a
              href="/"
              className="brand-logo"
            ><img className="vLogo" src={NavLogo}/>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link className="icon-container" to="/home"><span className="nav-item_title"><i className="material-icons home-icon">home</i>Home</span></Link>
              </li>
              <li>
                <Link className="icon-container" to="/tone"><span className="nav-item_title"><i className="material-icons tone-icon">record_voice_over</i>Tone</span></Link>
              </li>
              <li>
                <Link className="icon-container" to="/personality"><span className="nav-item_title"><i className="material-icons personality-icon">insert_chart</i>Personality</span></Link>
              </li>
              <li>
                <Link className="icon-container" to="/face"><span className="nav-item_title"><i className="material-icons face-icon">photo_camera</i>Face</span></Link>
              </li>
              <li>
                <Link className="icon-container" to="/manage"><span className="nav-item_title"><i className="material-icons account-icon">account_circle</i>Account</span></Link>
              </li>
              <li>
                <Link className="icon-container" to="/search"><span className="nav-item_title"><i className="material-icons search-icon">search</i>Search</span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
