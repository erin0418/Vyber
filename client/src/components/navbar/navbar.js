import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper amber darken-1">
            <a
              href="/"
              class="brand-logo"
            >VYBER<i class="material-icons vyber-icon">pie_chart</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link class="icon-container" to="/home"><i class="material-icons home-icon">home</i><span class="nav-item_title">Home</span></Link>
              </li>
              <li>
                <Link class="icon-container" to="/tone"><i class="material-icons tone-icon">record_voice_over</i><span class="nav-item_title">Tone</span></Link>
              </li>
              <li>
                <Link class="icon-container" to="/personality"><i class="material-icons personality-icon">insert_chart</i><span class="nav-item_title">Personality</span></Link>
              </li>
              <li>
                <Link class="icon-container" to="/face"><i class="material-icons face-icon">photo_camera</i><span class="nav-item_title">Face</span></Link>
              </li>
              <li>
                <Link class="icon-container" to="/accmanage"><i class="material-icons account-icon">account_circle</i><span class="nav-item_title">Account</span></Link>
              </li>
              <li>
                <Link class="icon-container" to="/search"><i class="material-icons search-icon">search</i><span class="nav-item_title">Search</span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
