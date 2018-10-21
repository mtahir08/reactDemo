import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './config/fbconfig';
import Form from './Form';
import ShowList from './showList';
class App extends Component {
  constructor() {
    super();
    this.state = {
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

  saveMyData = obj => {
    console.log({ obj });
    // this.ref.child('users').push(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Form sendData={this.saveMyData} />
        <ShowList data={this.state.data} />
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
