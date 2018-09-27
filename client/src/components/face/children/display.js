import React from "react";


const Display = props => (

        <div className="container mainPage" id="page-wrap">
            <div className="row">
                <div className="col xl12">
                        <h5 id="twitterNameDisplay" ></h5>
                </div>
            </div>
            <hr/>
                <div className="col s4 l6" id="contentDump">
                        <div id="sentToneList">
                        {props.response.map(response => {
                            <div> {response} </div>
                        })}
                    </div>
                </div>
            </div>
);

export default Display;

