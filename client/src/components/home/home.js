import React, { Component } from 'react'
import NavBar from '../navbar/navbar.js'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div>this is the home page</div>
      </div>
    )
  }
}
