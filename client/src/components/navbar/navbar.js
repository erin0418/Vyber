import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <Link to="/home"> home </Link>
            </li>
                <li>
                    <Link to="/tone"> tone </Link>
                </li>
                <li>
                    <Link to="/personality"> personality </Link>
                </li>
                <li>
                    <Link to="/face"> face </Link>
                </li>
                <li>
                    <Link to="/accmanage"> manage acc </Link>
                </li>
                <li>
                    <Link to="/search"> search </Link>
                </li>
        </ul>
      </div>
    )
  }
}