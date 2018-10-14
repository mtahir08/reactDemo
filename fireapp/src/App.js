import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './config/fbconfig';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      contact: '',
      data: []
    };
    this.ref = firebase.database().ref();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.ref.child('users').on('value', snapshot => {
      const obj = snapshot.val();
      const data = [];
      for (let key in obj) {
        data.push(obj[key]);
      }
      this.setState({ data: data });
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  saveData = () => {
    // const id =  parseInt(Math.random() * 10000);
    // to set data
    // this.ref.child('users').child(id).set(this.state);
    const id = firebase
      .database()
      .ref()
      .child('users')
      .push().key;
    console.log(id);
    this.ref
      .child('users')
      .child(id)
      .set({
        name: this.state.name,
        email: this.state.email,
        contact: this.state.contact
      });

    // to push data
    // this.ref.child('users').push(this.state)
    // this.getData();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="name"
              label="Name"
              fullWidth
              onChange={this.handleChange}
            />
            <br />
            <TextField
              id="email"
              label="Email"
              fullWidth
              onChange={this.handleChange}
            />
            <br />
            <TextField
              id="contact"
              label="Contact"
              fullWidth
              onChange={this.handleChange}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="extendedFab"
              fullWidth
              color="primary"
              onClick={this.saveData}
            >
              Add User
            </Button>
          </CardActions>
        </Card>
        <ul>
          {this.state.data.map((value, index) => {
            return (
              <li key={index}>
                {value.name}- {value.email} - {value.contact}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 500
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
};
export default withStyles(styles)(App);
