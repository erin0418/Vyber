import React, { Component } from "react";

export default class Home extends Component {
  state = { link: "", selectedPost: 0, comment:"", post:[] };
  handleInputChange = event => {
    //used for setting link& comment
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  makePost = ()=>{
    this.props.handlePost(this.state.link)
  }
  
 

  render() {
    return (
      <div>
        <div>this is the home page</div>

        <div>
          <input type="text" name="link" onChange={this.handleInputChange} />
          <button onClick={this.makePost}>Make Post</button>
        </div>
        <div>
          {this.state.post.map(post=>{
            return(<div id={post.id} onClick={this.selectPost}>{post.Link}</div>)
          })
          }
          </div>
        <div>
          <input type="text" name="comment" onChange={this.handleInputChange} />
          <button onClick={this.makeComment}>Make Post</button>
        </div>
      </div>
    );
  }
}
