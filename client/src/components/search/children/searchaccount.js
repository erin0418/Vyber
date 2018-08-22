import React from "react";

const SearchAccount = props => (
    <div>
        <br/><br/><br/>
        <div className="container" id="modalContainer">
            <div className="row tone-title">Search Friend</div>
            <div className="row">
                <div className="col s4">

                </div>
                <div className="col s4 input-field" id="twitterName">
                    <input className="input-field" type="text" name="accountName" id="twitterInput" onChange={props.handleInput} />
                    <label for="twitterInput">Please enter the account you want to search</label>
                </div>
                <div className="col s4">
                </div>
            </div>
            <div className="row" >
                <div className="col s4">

                </div>
                <div className="col s4" id="twitterLogin">
                    <a className="waves-effect waves-light btn-large" onClick={props.handleSearchAccount} id="modalButton">
                        <i className="material-icons left">photo_camera</i>Search Friend</a>
                </div>
            </div>
        </div>
    </div>
);

export default SearchAccount;
