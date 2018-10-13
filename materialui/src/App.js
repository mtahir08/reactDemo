import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from './logo.svg';
import './App.css';
import { styles } from './styles';
/* Simple use of simple material ui components*/

class App extends Component {
  render() {
    const { classes } = this.props;
    // OR
    // const classes  = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <img src={logo} className={classes.imgSize} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
