import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class PropChecking extends Component {
  render() {
    const { classes, data } = this.props;
    console.log(data);
    return (
        <div>
            this is props checking component.
        </div>
    );
  }
}

PropChecking.propTypes = {
  //   classes: PropTypes.object.isRequired,
//   data: PropTypes.arrayOf(PropTypes.object).isRequired
  data: PropTypes.arrayOf(PropTypes.shape({
      name : PropTypes.string,
      email:PropTypes.string,
      contact:PropTypes.string
  })).isRequired,
  clickHandler: PropTypes.func
};

PropChecking.defaultProps  ={
    clickHandler:null
}
const styles = {};
export default withStyles(styles)(PropChecking);
