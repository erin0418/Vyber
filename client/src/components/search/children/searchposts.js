import React, { Component } from 'react';
import FacePic from "../../home/face_thumb.jpg"
import TonePic from "../../home/tone_thumb.jpg"
import PersonalityPic from "../../home/personality_thumb.jpg"
import { throws } from 'assert';


export default class SearchPosts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
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
        console.log(event.target)
        const postId = event.target.getAttribute('id')
        const link = event.target.getAttribute('link')
        const title = event.target.getAttribute('title')
        console.log(link, title, postId)

        this.props.setSelectedPost(postId, link, title)

    }
    render() {
        return (

            <div>
                <br /><br /><br />
                <div className="container" id="modalContainer">
                    <div className="row tone-title">Pick a Post!</div>
                    <div className="row postCards">
                    {this.state.posts.map((post, i) => {
                        console.log(post)
                        if (post.Title === "Personality") {
                            console.log("hello");
                            return (
                                <div class="col s6 m6 ">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={PersonalityPic} />
                                            <span class="card-title">Personality Post</span>
                                            <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id={post.id} link={post.Link} title={post.Title} onClick={this.selectPost}>add</i></a>
                                        </div>
                                        <div class="card-content innerTextCards">
                                            <p>{post.Link}</p>
                                        </div>
                                    </div>
                                </div>
                           )
                           

                        } else if (post.Title === "Face Recognition") {
                            return (
                                <div class="col s6 m6 ">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={FacePic} />
                                            <span class="card-title">Face Post</span>
                                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" id={post.id} link={post.Link} title={post.Title} onClick={this.selectPost}>add</i></a>
                                        </div>
                                        <div class="card-content innerTextCards">
                                            <p>{post.Link}</p>
                                        </div>
                                    </div>
                                </div>
                          )
                        } else if (post.Title === "Tone") {
                            return (
                                <div class="col s6 m6">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src={TonePic} />
                                            <span class="card-title">Tone Post</span>
                                            <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons" id={post.id} link={post.Link} title={post.Title} onClick={this.selectPost}>add</i></a>
                                        </div>
                                        <div class="card-content innerTextCards">
                                            <p>{post.Link}</p>
                                        </div>
                                    </div>
                                </div>
                        )
                        }
                    })}
                    </div>
                </div>
            </div>
        )
    }
}



