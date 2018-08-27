import React, { Component } from 'react';
import avatar from "./avatar_thumb.jpg";
import "./manage.css";
import CreatePost from "./children/createpost";
import ViewPosts from "./children/viewposts";
import UpdateAccount from "./children/updateaccount";



export default class Manage extends Component {
  state = {
    page: "",
    title: "",
    link: "",
    completeMessage: "",
    completeMessageAccount: "",
    fullname: "",
    email: "",
    name: "",
    password: ""
  }
  handleInputChange = event => {
    //used for setting username and password states
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  handleClick = (event) => {
    const value = event.target.getAttribute('id')
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  createNewPost = () => {
    this.setState({ page: "createPost" })
  }
  viewPosts = () => {
    this.setState({ page: "viewPost" })
  }
  updateAccount = () => {
    this.setState({ page: "updateAccount" })
  }
  pageRender = () => {

    
    switch (this.state.page) {
      case "createPost":
        return <CreatePost handlePost={this.handlePost} handleInput={this.handleInputChange} completeMessage={this.state.completeMessage} handleClick={this.handleClick} />
        break;
      case "viewPost":
        return <ViewPosts account={this.props.account} />
        break;
      case "updateAccount":
        return <UpdateAccount handleInput={this.handleInputChange} handleAccountChange={this.handleAccountChange} completeMessageAccount={this.state.completeMessageAccount} />
        break;
      default:
        return null

    }
  }
  handlePost = (event) => {
    event.preventDefault()
    //function to allow a user to create a post
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        Title: this.state.title,
        Link: this.state.link,
        UserId: this.props.account.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({ completeMessage: "Your post has been created!" })
      });
  };
  handleAccountChange = (event) => {
    event.preventDefault()
    //function to allow a user to create a post
    fetch("/api/usersEdit", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        fullname: this.state.fullname,
        username: this.state.username,
        password: this.state.password,
        id: this.props.account.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({ completeMessageAccount: "Your account has been updated!" })
      });
  };
  render() {
    return (
      <div className="manageBody containerfluid navShift">
        <div className="row">
          <div className="usernav col s3">
            <div className="userInfo">
              <img className="accountPic" src={avatar}></img>
              <p className="manageFullname">{this.props.account.fullname}</p>
              <p className="manageUsername">@{this.props.account.username}</p>
            </div>
            <p className="manageBtn" onClick={this.updateAccount}><i className="material-icons nav-home-icon">home</i> Edit Account</p>
            <p className="manageBtn" onClick={this.createNewPost}><i className="material-icons nav-create-icon">create</i> Create New Post</p>
            <p className="manageBtn" onClick={this.viewPosts}><i className="material-icons nav-review-icon">rate_review</i> Review Old Post</p>
          </div>
          <div className="col s2"></div>
          <div className="col s6">
            {this.pageRender()}
          </div>
        </div>
      </div>

    )
  }
}