import React, { Component } from 'react'
import UserInputs from './children/userinput'
import Display from './children/display'


export default class Tone extends Component {
  state = {
    hideInputs: false,
    results: []
  };
  handleInput = ()=>{
     fetch('/toneRoute', {
       name: "barackObama",
       method: 'post'
     }).then(function (response) {
       this.setState({results}) response.json();
     }).then(function (data) {
       ChromeSamples.log('Created Gist:', data.html_url);
     });
    this.setState({hideInputs : true})
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