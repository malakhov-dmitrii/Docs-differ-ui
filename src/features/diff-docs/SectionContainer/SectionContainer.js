import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import UnchangedData from '../UnchangedData/UnchangedData';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    justifyContent: 'space-between',
    border: '2px solid',
    width: '100%'
  },
});

export const SectionContainer = (props) => {
  const classes = useStyles();

  return (
    <UnchangedData>{props.children}</UnchangedData>
  );
};

SectionContainer.propTypes = {
  diffDocs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.node,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    diffDocs: state.diffDocs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionContainer);
