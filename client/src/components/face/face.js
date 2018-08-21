import React, { Component } from 'react'
import UserInputs from './children/userinput'
import Display from './children/display'
import "./face.css";

export default class Face extends Component {
  state = {
    hideInputs: false,
    results: []
  };
  handleInput = ()=>{
     console.log("display page");
     this.setState({hideInputs: true});
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
