import React, { Component } from 'react';
import ToneDisplay from "../../tone/children/tonedisplay";
import PersonalityDisplay from "../../personality/children/personalitydisplay";
import FaceDisplay from "../../face/children/facedisplay";
import Comment from "./comment"



export default class SearchDisplay extends Component {
    state = {
        postInfo: [],
        comments: [],
        results: [],
        toneRendered: false,
        personalityRendered: false,
        faceRendered: false
    }
    componentDidMount() {
        
                console.log(this.props.postTitle)
                if (this.props.postTitle === "Personality") {
                    return fetch("/personality", {
                        method: "POST",
                        body: JSON.stringify({
                            name: this.props.postLink
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        return response.json();
                    })
                        .then(body => {
                            this.setState({
                                results: body,
                                personalityRendered: true
                            });
                            return console.log("results are in")
                        })

                } else if (this.props.postTitle === "Tone") {
                    return fetch("/tone", {
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
                                results: body,
                                toneRendered: true

                            });
                            return console.log("results are in")
                            
                        });

                } else if (this.props.postTitle === "Face Recognition") {
                    return fetch('https://api-us.faceplusplus.com/facepp/v3/detect?api_key=28GCWA3CC2Cha_cEslK-nGp7O4MkEeAW&api_secret=45j6-poXO9N1XKLORfqQ-RNujaAjKjPu&image_url=' +
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
                                results: body,
                                faceRendered: true

                            });
                            return console.log("results are in")

                        });
                }

    }
    render() {
        return (
            <div className="containerfluid">
                <div className="row background">
                <h4>{this.props.searchedAccount.username} {this.props.postTitle}'s results:</h4>
                    <div className="col s8 m8 innerBackground overFlow">
                        {
                            (this.state.toneRendered === false)
                                ? null
                                : <ToneDisplay results={this.state.results} />
                        }
                        {
                            (this.state.personalityRendered === false)
                                ? null
                                : <PersonalityDisplay results={this.state.results} />
                        }
                        {
                            (this.state.faceRendered === false)
                                ? null
                                : <FaceDisplay results={this.state.results} imgUrl={this.props.postLink}/>
                        }
                    </div>
                    <div className="col s4 m4 innerBackground">
                    <Comment selectedPost={this.props.selectedPost} account={this.props.account}/>
                    </div>
                </div>
            </div>

        )
    }
}