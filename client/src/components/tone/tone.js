import React, {
  Component
} from 'react'
import UserInputs from './children/userinput'
import Display from './children/tonedisplay'
import "./tone.css";


export default class Tone extends Component {
  state = {
    hideInputs: false,
    results: [],
    twitterName: ""
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
    fetch("/tone", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.twitterName
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          results: body,
          hideInputs: true
        });
        return console.log("tones are in!")
      });
  };


  render() {
    return (<
      div > {
        (this.state.hideInputs === false) ?
          < UserInputs handlePage={
            this.handlePage
          }
            handleInput={
              this.handleInput
            }
          /> :
          < Display results={
            this.state.results
          }
          />
      } <
      /div>
    )
  };
}