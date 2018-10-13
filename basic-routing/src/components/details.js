import React, { Component } from 'react';

import { data, SaveUserData } from './../services/index';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // this.props.match.params.id
    const usermatched = data.find(
      user => user.id == this.props.match.params.id
    );
    if (usermatched) {
      this.setState({ user: usermatched });
    }
    // const usermatched = data.find((user)=> {
    //   if(user.id == this.props.match.params.id){
    //     return user;
    //   }
    // })
  }

  sendUserData = () => {
    SaveUserData(this.state.user)
      .then(success => {
        console.log(success);
        // Here we can set user data to service and
        // route user to main dashobard
        this.props.history.push('/');
      })
      .catch(error => {
        // Here we can show error message to user
        console.log(error);
      });
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <h1>User Detail</h1>
        {this.state.user ? (
          <ul>
            <li>ID: {this.state.user.id}</li>
            {/* <li>{this.state.user && this.state.user ? this.state.user.id: null}</li> */}
            <li>NAME: {this.state.user.name}</li>
            <li>CLASS: {this.state.user.class}</li>
            <li>
              <button onClick={this.sendUserData}>Send to server</button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Details;
