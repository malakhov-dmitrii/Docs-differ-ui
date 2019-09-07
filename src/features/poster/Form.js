import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Card, Container, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    padding: '20px',
    minWidth: 275,
    maxWidth: 800,
    margin: "200px auto",
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 20,
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
  },
  input: {
    width: '50%',
  },
  pos: {
    marginBottom: 12,
  },
});

export const Form = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Card className={classes.card}>
        <div className={classes.questionWrapper}>
          <Typography className={classes.title}>Ask a question:</Typography>
          <TextField
            id="outlined-name"
            label="Question"
            className={classes.input}
            // value={values.name}
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button href='' className={classes.button} color="primary" variant="contained">Get an answer</Button>
      </Card>
    </Container>
  );
};

Form.propTypes = {
  poster: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    poster: state.poster,
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
)(Form);
