import React, { Component } from 'react';


class User extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount(){
      fetch('/api/reactTest').then(res=> res.json()).then(users => this.setState({users}))
    }



  render() {
    return (
      <div className="users">
        <div>
          <ul>
          {this.state.users.map(users =>
            <li id={users.id} key={users}>{users.username}</li>
          )}
          </ul>
        </div>  
        
      </div>
    );
  }
}

export default User;

