import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      contact: ''
    };
  this.ref = firebase.database().ref();
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  saveData = () => {
    // this.props.sendData(this.state);
    this.ref.child('users').push(this.state);
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
