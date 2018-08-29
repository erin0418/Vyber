import React from "react";
import "./tonedisplay.css";


const Display = props => (
  <div className="container fluid">
    {console.log(props)}


    {props.results.utterances_tone.map(toneObj => {
      console.log(toneObj.tones);
      return (

        <div className="col s12 m7 cardStyling" id={toneObj.utterance_id}>
          <div className="card">
            <div className="card-stacked">
              <div className="card-content">
                <p>{toneObj.utterance_text}</p>
              </div>
              {toneObj.tones.map(tone => {
                console.log(tone)
                return (<div class="card-action">
                  <div id="cardText">{tone.tone_name}: {tone.score}</div>
                </div>)
              })}
            </div>
          </div>
        </div>
      )

    })}

  </div>


);
export default Display;




