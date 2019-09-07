import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    // border: '2px solid'
  },
});

const UnchangedData = (props) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={classes.root} style={{
      display: expanded ? 'inline-block' : 'none'
    }}>
      {props.children}
    </div>
  );
};

export default UnchangedData

UnchangedData.propTypes = {
  children: PropTypes.node.isRequired,
};
