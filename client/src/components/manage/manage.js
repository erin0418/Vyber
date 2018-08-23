import React, { Component } from 'react';
import avatar from "./avatar_thumb.jpg";
import "./manage.css";

export default class Manage extends Component {
  render() {
    return (
      <div className="manageBody">
        <div className="usernav">
          <div className="userInfo">
          <img className="accountPic" src={avatar}></img>
            <p className="manageFullname">Peter Parker</p>
            <p className="manageUsername">@speterparkerman</p>
          </div>
          <p className="manageBtn"><i className="material-icons nav-home-icon">home</i> Home</p>
          <p className="manageBtn"><i className="material-icons nav-friend-icon">group</i> Friends</p>
          <p className="manageBtn"><i className="material-icons nav-create-icon">create</i> Create New Post</p>
          <p className="manageBtn"><i className="material-icons nav-review-icon">rate_review</i> Review Old Post</p>
          <p className="manageBtn"><i className="material-icons nav-comment-icon">comment</i> Add Comment</p>
        </div>
      </div>
      
    )
  }
}