import React, { Component } from 'react';


export default class SearchDisplay extends Component {
    state = {
        comments: [],
        commentBody: "",
        comment: ''
    }
    handleCommentInput = event => {
        //used for setting link& comment
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };
    componentWillMount() {
        console.log("comment search api")
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
            })

    }
    handleComment = () => {
        console.log(this.state.commentBody, this.props.account.id, this.props.selectedPost)
        fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                link: this.state.commentBody,
                UserId: this.props.account.id,
                PostId: this.props.selectedPost,
                username: this.props.account.username
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(body => {
                this.setState({ comment: "commentAdded" })
                console.log(body);
            });
    };
    render() {
        return (
            <div className="containerfluid">
                <div className="row commentRowHigher">
                    {this.state.comments.map((comment, i) => {
                        console.log(comment)
                        return (
                            <div className="col s12 m12 commentCard">
                                <div className="card horizontal" key={i} id={comment.id}>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>{comment.body}</p>
                                        </div>
                                        <div className="card-action">
                                            <a>{comment.username}</a>
                                            <a>{comment.createdAt}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row commentRowLower">
                    <div className="col s6 input-field" id="twitterName">
                        <input className="input-field" type="text" name="commentBody" id="twitterInput" onChange={this.handleCommentInput} />
                        <label for="twitterInput">Leave a Comment</label>
                        v>
                            </div>

                    <div className="col s4">
                        <button className="waves-effect waves-light btn-large" onClick={this.handleComment}>comment</button>
                    </div>
                </div>
            </div>
        )
    }
}