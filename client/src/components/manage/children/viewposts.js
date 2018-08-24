import React, { Component } from 'react';



export default class ViewPosts extends Component {
  state = {
    posts:[]
  }
  componentDidMount(){
      fetch("/api/postsSearch", {
          method: "POST",
          body: JSON.stringify({
              id: this.props.account.id
          }),
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then((response) => {
              return response.json();
          })
          .then(body => {
              console.log(body)
              this.setState({
                  posts: body
              });
          });
  }
  
  render() {
    return (
      <div className="col sm6">
            <div>
                {this.state.posts.map((post, i) => {
                    console.log(post)
                    return (

                        <div id={post.id} key={i} onClick={this.selectPost}>{post.Link}</div>
                    )
                })}
            </div>
  </div>
    )
  }
}