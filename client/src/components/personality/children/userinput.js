import React from "react";

const UserInputs = props => (
    <div>
        <br/><br/><br/>
        <div className="container" id="modalContainer">
            <div className="row tone-title">Personality Analyzer</div>
            <div className="row">
                <div className="col s4">

                </div>
                <div className="col s4 input-field" id="twitterName">
                    <input className="input-field" type="text" name="twitterName" id="twitterInput" />
                    <label for="twitterInput">Please enter your Twitter username</label>
                </div>
                <div className="col s4">
                </div>
            </div>
            <div className="row" >
                <div className="col s4">

                </div>
                <div className="col s4" id="twitterLogin">
                    <a className="waves-effect waves-light btn-large" id="modalButton">
                        <i className="material-icons left">insert_chart</i>Get My Tweets</a>
                </div>
                <div className="col s4">
                    <div onClick={props.handleInput}> click me to hide modal </div>
                </div>
            </div>
        </div>
    </div>
);

export default UserInputs;
