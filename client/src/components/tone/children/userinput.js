import React from "react";

const UserInputs = props => (
    <div>
         <div className="container amber darken-1" id="modalContainer">
            <div className="row" >
                Tone Analyzer
            </div>
            <div className="row" >
                <div className="col s4">

                </div>
                <div className="col s4" id="twitterName">
                    <input type="text" name="twitterName" id="twitterInput"/>
                </div>
                    <div className="col s4">
                    </div>
                </div>
                <div className="row" >
                    <div className="col s4">

                    </div>
                    <div className="col s4" id="twitterLogin">
                        <a className="waves-effect waves-light btn-large" id="modalButton">
                            <i className="material-icons left">person</i>Get My Tweets</a>
                    </div>
                    <div className="col s4">
                        <div onClick={props.handleInput}> click me to hide modal </div>
                    </div>
                </div>
            </div>
    </div>
);

export default UserInputs;

