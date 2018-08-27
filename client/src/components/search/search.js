import React, { Component } from "react";
import SearchAccount from "./children/searchaccount";
import SearchPosts from "./children/searchposts";
import SearchDisplay from "./children/searchdisplay";
import "./search.css"


export default class Search extends Component {
  state = {
    page: "searchAccount",
    accountName: "",
    searchedAccount: [],
    selectedPost: 0,
    commentBody: "",
    selectedPostTitle: "",
    selectedPostLink: ""
  };
  handleInput = event => {
    //used for setting link& comment
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleSearchAccount = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.accountName
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          searchedAccount: body,
          page: "post"
        });
      });
  };
  setSelectedPost = (postId, link, title) => {
    this.setState({
      selectedPost: postId,
      selectedPostLink: link,
      selectedPostTitle: title,
      page: "display"
    });
  };
 
  pageRender = () => {
    //this is triggered by out handleSelectFunc and renders the
    // page the client has called for
    if (this.state.page === "searchAccount") {
      return <SearchAccount handleSearchAccount={this.handleSearchAccount} handleInput={this.handleInput} />;
    } else if (this.state.page === "post") {
      return (
        <SearchPosts
          searchedAccount={this.state.searchedAccount}
          setSelectedPost={this.setSelectedPost}
        />
      );
    } else if (this.state.page === "display") {
      return (
        <SearchDisplay
          searchedAccount={this.state.searchedAccount}
          selectedPost={this.state.selectedPost}
          handleInput={this.handleInput}
          handleComment={this.handleComment}
          postTitle={this.state.selectedPostTitle}
          postLink={this.state.selectedPostLink}
          account={this.props.account}
        />
      );
    }
  };
  render() {
    return (
      <div className="navShift">
        <div>{this.pageRender()}</div>
      </div>
    );
  }
}
