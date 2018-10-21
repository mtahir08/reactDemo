import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ShowList extends Component {
  ref = firebase.database().ref();
  state = {
    data: []
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.ref.child('users').on('value', snapshot => {
      const obj = snapshot.val();
      const data = [];
      for (let key in obj) {
        const newObj = obj[key];
        newObj['id'] = key;
        data.push(newObj);
      }
      this.setState({ data: data });
    });
  };

  deleteItem = id => {
    this.ref
      .child('users')
      .child(id)
      .remove();
  };

  editItem = obj => {
    console.log(obj);
    this.ref
      .child('users')
      .child(obj.id)
      .set({
        name: 'jhone 2',
        email: 'example@email.com',
        contact: 'newcontact'
      });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric> S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell numeric>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                    <TableCell numeric>
                      <Button
                        variant="fab"
                        color="primary"
                        aria-label="Edit"
                        className={classes.button}
                        onClick={() => this.editItem(row)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        variant="fab"
                        color="secondary"
                        aria-label="Delete"
                        className={classes.button}
                        onClick={() => this.deleteItem(row.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <Button
          variant="fab"
          className={classes.fab}
          color={'primary'}
          onClick={this.addUser}
        >
          <AddIcon />
        </Button>
      </Paper>
    );
  }
}

ShowList.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 5,
    right: theme.spacing.unit * 7
  }
});
export default withStyles(styles)(ShowList);
