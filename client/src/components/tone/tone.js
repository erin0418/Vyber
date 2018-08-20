import React, { Component } from 'react'
import UserInputs from './children/userinput'
import Display from './children/display'
import "./tone.css";


export default class Tone extends Component {
  state = {
    hideInputs: false,
    results: []
  };
  handleInput = ()=>{
     console.log("display page")
  }
  render() {
    return (
      <div>
        {
          (this.state.hideInputs === false)
          ? <UserInputs handleInput={this.handleInput}/>
          : <Display results={this.state.results}/>
        }
      </div>
    )
  }
}