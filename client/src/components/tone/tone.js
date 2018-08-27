import React, { Component } from 'react'
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
  
  handlePage = ()=>{
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
        console.log(body.utterances_tone);
        let textArray = [];
        
        let resArray = [];
        for (let i =0; i< body.utterances_tone.length; i++){
          textArray.push(body.utterances_tone[i].utterance_text)
          let toneArray = [];
          
          for(let j =0; j< body.utterances_tone[i].tones.length; j++){
            //console.log(body.utterances_tone[i].tones.length)
            //console.log(body.utterances_tone[i].tones[j].tone_name)
            if(body.utterances_tone[i].tones[j].tone_name){
              toneArray.push(body.utterances_tone[i].tones[j].tone_name)
              console.log(toneArray)
            }
          }
          // textArray.push(body.utterance_tone[i].tones[0].tone_name)

          resArray.push({
            text: body.utterances_tone[i].utterance_text,
            tone: toneArray
          })
         
        }
        console.log(resArray)
        this.setState({
          results: resArray,
          hideInputs: true
        });
      });
  };

  render() {
    return (
      <div className="navShift">
        {/* hide modal */}
        {this.state.hideInputs === false ? (
          <UserInputs
            handlePage={this.handlePage}
            handleInput={this.handleInput}
          />
        ) : (
          // <Display results={this.state.results} />
          this.state.results.map(result => (
                    <Display results={result}/>
                     ))
        )}
      </div>
    );
  }
  // with modal
  // render() {
  //   return (
  //     <div>
        
  //         {this.state.hideInputs === false}
  //         <UserInputs
  //            handlePage={this.handlePage} 
  //            handleInput={this.handleInput}
  //         /> 
  //       {this.state.results.map(result => (
  //          <Display results={result}/>
  //         ))}
      
  //     </div>
  //   )
  // };
}