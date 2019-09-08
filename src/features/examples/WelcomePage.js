import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import rekitLogo from '../../images/logo.png';
import * as actions from './redux/actions';

export class WelcomePage extends Component {
  static propTypes = {
    examples: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="examples-welcome-page">
        <a href="http://github.com/supnate/rekit">
          <img src={rekitLogo} className="app-logo" alt="logo" />
        </a>
        <h1>Добро пожаловать в НЕМОЙОФИС!</h1>
        <p>
          Загрузить файл в <a href="http://localhost:6075/diff-docs/upload">НЕМОЙОФИС</a>
        </p>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    examples: state.examples,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
