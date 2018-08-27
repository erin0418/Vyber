import React from "react";

const Display = props => (
  <div>
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
  </div>
);

export default Display;
