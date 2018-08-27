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
                <p id="cardtext"> {props.results.text} </p>
              </div>
              {/* <div className="card-action">
            </div> */}
            </div>
              
                {props.results.tone.map(result => (
                  <div className="chip">
                     <p className="flow-text">{result}</p>
                  </div>
                ))}

                {/* <hr></hr> */}
              
          </div>
          </div>
        </div> 
  </div>
);
export default Display;