import React, { Component } from 'react';

export default class SearchDisplay extends Component {
    state={
        postInfo:[],
        comments:[],
        results:[]
    }
    componentDidMount(){
        //will need to also take the post id and load the "tone or personality" Api will the link inside of that "Post"
        // save that into post info or whatever and display the api data above where we show comments
             fetch("/api/commentSearch", {
                     method: "POST",
                     body: JSON.stringify({
                         postid: this.props.selectedPost
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
                         comments: body
                     });
                 });
                 if (this.props.postTitle === "Personality") {
                     fetch("/personality", {
                             method: "POST",
                             body: JSON.stringify({
                                 name: this.props.postLink
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
                                 results: body
                            });
                         });
                 } else if (this.props.postTitle === "Tone") {
                     fetch("/tone", {
                             method: "POST",
                             body: JSON.stringify({
                                 name: this.props.postLink
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
                                 results: body
                             });
                         });
                     
                 } else if (this.props.postTitle === "Face Recognition") {
                     fetch('https://api-us.faceplusplus.com/facepp/v3/detect?api_key=28GCWA3CC2Cha_cEslK-nGp7O4MkEeAW&api_secret=45j6-poXO9N1XKLORfqQ-RNujaAjKjPu&image_url=' +
                             this.props.postLink +
                             '&return_attributes=gender,age,smiling,headpose,facequality,blur,eyestatus,emotion,ethnicity,beauty,mouthstatus,eyegaze,skinstatus', {
                                 method: 'POST'
                             })
                         .then(response => {
                             return response.json()
                         })
                         .then(body => {
                             console.log(body)
                             this.setState({
                                 results: body
                             });
                         });
                 }
    }
  render(){
      return(

          <div>
        <br/><br/><br/>
        <div className="container" id="modalContainer">
            <div className="row">
            <h1 >Comments!</h1>
                {this.state.comments.map(comment=>{
                    console.log(comment)
                    return(

                        <div id={comment.id}>{comment.body}</div>
                    )
                })}
            </div>
            <div>
                <h1>Make a comment!</h1>
          <input type="text" name="commentBody" onChange={this.props.handleInput} />
          <button onClick={this.props.handleComment}>comment</button>
        </div>
        </div>
    </div>
            )
  }
}