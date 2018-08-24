import React, { Component } from 'react'
import UserInputs from './children/userinput'
import Display from './children/facedisplay'
import "./face.css";

export default class Face extends Component {
  state = {
    imgUrl: "",
    hideInputs: false,
    results: []
  };
  handleInput = event => {
    //used for setting link& comment
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handlePage = () => {
    fetch('https://api-us.faceplusplus.com/facepp/v3/detect?api_key=28GCWA3CC2Cha_cEslK-nGp7O4MkEeAW&api_secret=45j6-poXO9N1XKLORfqQ-RNujaAjKjPu&image_url=' +
      this.state.imgUrl +
      '&return_attributes=gender,age,smiling,headpose,facequality,blur,eyestatus,emotion,ethnicity,beauty,mouthstatus,eyegaze,skinstatus', {
        method: 'POST'
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
  console.log(body)
  this.setState({
    results: body,
    hideInputs: true
  });
});
  }
render() {
  return (
    <div>
      {
        (this.state.hideInputs === false)
          ? <UserInputs handlePage={this.handlePage} handleInput={this.handleInput} />
          : <Display results={this.state.results} imgUrl={this.state.imgUrl} />
      }
    </div>
  )
}
}
