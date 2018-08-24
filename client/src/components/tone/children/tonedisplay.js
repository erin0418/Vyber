import React from "react";
import "./tonedisplay.css";


const Display = props => (
  <div>

      
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
  

  </div>
);
export default Display;