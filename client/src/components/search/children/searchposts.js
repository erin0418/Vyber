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
        const link = event.target.getAttribute('link')
        const title = event.target.getAttribute('title')
        console.log(link, title)

        this.props.setSelectedPost(postId,link,title)
          
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

                        <div id={post.id} link={post.Link} title={post.Title} key={i} onClick={this.selectPost}>{post.Title}:   {post.Link}</div>
                    )
                })}
            </div>
        </div>
    </div>
                )
  }
}