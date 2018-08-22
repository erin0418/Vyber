import React, { Component } from 'react'
import UserInputs from './children/userinput'
import Display from './children/display'
import "./tone.css";


export default class Tone extends Component {
  state = {
    hideInputs: false,
    results: []
  };

  handlePage = ()=>{
     this.setState({hideInputs: true});
  };


  render() {
    return (
      <div>
        {
          (this.state.hideInputs === false)
          ? <UserInputs handlePage={this.handlePage}/>
          : <Display results={this.state.results}/>
        }
      </div>
    )
  };
}