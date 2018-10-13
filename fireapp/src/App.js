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
    this.state = {};
    this.ref = firebase.database().ref();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <TextField id="name" label="Name" fullWidth />
            <br />
            <TextField id="email" label="Email" fullWidth />
            <br />
            <TextField id="contact" label="Contact" fullWidth />
          </CardContent>
          <CardActions>
            <Button variant="extendedFab" fullWidth color="primary">
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
