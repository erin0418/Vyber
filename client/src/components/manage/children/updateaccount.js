import React from "react";

const UpdateAccount = props => (
    
  <div className="col sm9 updateAccount">
  <br/><br/>
  <h4 className="center manageHeader">UPDATE YOUR ACCOUNT INFO</h4>
    <br/>
    <div className="input-field">
    <input name="email" type="text" onChange={props.handleInput} />
    <label for="email" className="updateLabel" id ="p1">Email</label>
    </div>
    <div className="input-field">
    <input name="fullname" type="text" onChange={props.handleInput} />
    <label for="fullname" className="updateLabel" id ="p1">Full Name</label>
    </div>
    <div className="input-field">
    <input name="username" type="text" onChange={props.handleInput} />
    <label for="username" className="updateLabel" id ="p1">Username</label>
    </div>
    <div className="input-field">
    <input name="password" type="text" onChange={props.handleInput} />
    <label for="password" className="updateLabel" id ="p1">Password</label>
    </div>
    <button class="submit btn cardBtn amber darken1 waves-effect waves-orange"  onClick={props.handleAccountChange}>
      Update Info
    </button>
    <div className="success">{props.completeMessageAccount}</div>
  </div>
);

export default UpdateAccount;