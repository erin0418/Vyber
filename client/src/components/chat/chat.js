import React, { Component } from "react";
import "./chat.css";
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCI720lyTp5dXaS_HwubygZfT9moJio5HU",
    authDomain: "vybr-47de0.firebaseapp.com",
    databaseURL: "https://vybr-47de0.firebaseio.com",
    projectId: "vybr-47de0",
    storageBucket: "vybr-47de0.appspot.com",
    messagingSenderId: "787523706427"
};

firebase.initializeApp(config);

const database = firebase.database();
// import DB from "./data/database"
  
    // Initialize Firebase


export default class Chat extends Component {
        state = {
            userName: "",
            messages: "",
        };        
    
      componentWillMount() {
        const messagesRef = database.ref('messages')
          .orderByKey()
          .limitToLast(100);
    
        messagesRef.on('child_added', snapshot => {
          const message = { text: snapshot.val(), id: snapshot.key };
    
          this.setState(prevState => ({
            messages: [ message, ...prevState.messages ],
          }));
        });
      }
    
      onAddMessage(event) {
        event.preventDefault();
    
        database.ref('messages').push(this.input.value);
    
        this.input.value = '';
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
                <p>This is where the firebase messages will go.</p>
                <form onSubmit={this.onAddMessage}>
                    <input type="text" ref={node => this.input = node}/>
                    <input type="submit"/>
                    <ul>
                    {this.state.messages.map(message =>
                        <li key={message.id}>{message.text}</li>
                    )}
                    </ul>
                </form>
                </div>
                <button className="collapsible amber darken-1" onClick={this.collapseChat}>Double Click to Chat</button>
            </div>
        )}
    }