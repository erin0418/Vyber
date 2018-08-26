import React, { Component } from "react";
import "./chat.css";
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCBjQyfcraeRZHxOP67Uf1C1yEMEFwI0k4",
    authDomain: "vybr-b1111.firebaseapp.com",
    databaseURL: "https://vybr-b1111.firebaseio.com",
    projectId: "vybr-b1111",
    storageBucket: "vybr-b1111.appspot.com",
    messagingSenderId: "182545839420"
  };
  firebase.initializeApp(config);

 const database = firebase.database();

 export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

        handleChange(event) {
            this.setState({value: event.target.value});
        }
    
        handleSubmit(event) {
            event.preventDefault();
            database.ref().push({
                message: this.state.value
            });
        }
        writeMessages(message){
            database.ref().on("child_added", function(snapshot) {
                // storing the snapshot.val() in a variable for convenience
                this.setState.messages = snapshot.val().message;
            })
        }
        collapseChat = () => {
            var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.previousElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });
            }
        }
    render() {
        return (
            <div className="chat-bar">
                <div className="content">
                <p>{this.state.message}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                </div>
                <button className="collapsible amber darken-1" onClick={this.collapseChat}>Double Click to Chat</button>
            </div>
        )}
    } 