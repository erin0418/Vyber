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
const messageArray = [];
const userNameArray = [];

 export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', messages: [], userName: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
// Watches for message to be submitted
        handleChange(event) {
            this.setState({value: event.target.value});
        }   
// Saves the message to the firebase database    
        handleSubmit(event) {
            event.preventDefault();
            database.ref("/messages").push({
                message: this.state.value,
                userName: this.props.userName
            });
            // Need to reset form this doesn't work
            this.refs.formInput.value = '';
        }
// Looks for all connections to the database page once chat box is clicked
        componentDidMount() {
            const connectionsRef = database.ref("/connections");
            const connectedRef = database.ref(".info/connected");

            connectedRef.on("value", function(snap) {
                if (snap.val()) {
                var con = connectionsRef.push(true);
                con.onDisconnect().remove();
                }
            });
            this.writeMessages()
        }
// Writes messages to the empty chat box from the firebase database
        writeMessages = () => { 
            database.ref("/messages").on("child_added", snapshot => {
               
                snapshot.forEach((snap) => {
                    if(snap.key == "message"){
                        messageArray.push(snap.val());
                        if (messageArray.length > 5) {
                            messageArray.shift(); 
                        }
                    }
                    else{
                        userNameArray.push(snap.val());
                        if (userNameArray.length > 5) {
                            userNameArray.shift(); 
                        }
                    }
                  })
                  this.setState({messages: messageArray})
                  this.setState({userName: userNameArray})
            })          
        }
// Chat box opens and closes on double click
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
                <div className="content row">
                <ul id="messageContent" className="col s3">
                {this.state.userName.map((item) => {
                    return (
                    <li key={this.state.id}>
                        <li>{item}: </li>
                    </li>
                    )
                })}
                </ul>
                <ul id="messageContent" className="col s9">
                {this.state.messages.map((item1) => {
                    return (
                    <li key={this.state.id}>
                        <li>{item1}</li>
                    </li>
                    )
                })}
                </ul>
                <form onSubmit={this.handleSubmit} id="form">
                    <input id="text-box" type="text" ref="formInput" value={this.state.value} onChange={this.handleChange}/>
                    <input className="amber darken-1" type="submit" value="SEND" />
                </form>
                </div>
                <button id="chat"className="collapsible amber darken-1" onClick={this.collapseChat}>Double Click to Chat</button>
            </div>
        )}
    }