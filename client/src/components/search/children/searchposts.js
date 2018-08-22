import React, { Component } from 'react';

export default class SearchPosts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
         fetch("/api/postsSearch", {
                 method: "POST",
                 body: JSON.stringify({
                     id: this.props.searchedAccount.id
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
    selectPost = (event) => {
        const postId = event.target.getAttribute('id')
        this.props.setSelectedPost(postId)
          
    }
  render(){
      return(

          <div>
        <br/><br/><br/>
        <div className="container" id="modalContainer">
            <div className="row tone-title">Pick a Post!</div>
            <div className="row">
                {this.state.posts.map((post,i)=>{
                    console.log(post)
                    return(

                        <div id={post.id} key={i} onClick={this.selectPost}>{post.Link}</div>
                    )
                })}
            </div>
        </div>
    </div>
                )
  }
}