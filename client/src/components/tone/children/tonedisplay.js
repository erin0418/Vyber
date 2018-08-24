import React from "react";
import "./tonedisplay.css";


const Display = props => (
  <div>
<<<<<<< HEAD

      
        <div>
          <div className="container">
          <div className="col s12 m7">
            {/* <h2 className="header">Tweet:</h2> */}
            <div className="card-stacked" id="card">
              <div className="card-content black-text">
                <p id="cardtext"> {props.results} </p>
              </div>
              <div className="card-action">
            </div>
            </div>
              <div className="chip">
                Tone
              </div>
          </div>
          </div>
        </div> 
  

=======
    {props.results.utterances_tone.map(result => {
      console.log(result);
      return (
        <div>
          <div class="col s12 m7">
            <h2 class="header">Horizontal Card</h2>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
  )
})}
>>>>>>> e7ef0a44b5afd579ba4f97155b747533500b2b23
  </div>
);
export default Display;