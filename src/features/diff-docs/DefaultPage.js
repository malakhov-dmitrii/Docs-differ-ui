import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import {
  Card,
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Content from './DocumentContent/Content';

const data = [
  [
    {
      'type': 'choose',
      'options': ['this is the', ''],
    },
    {
      'type': 'remove',
      'text': 'some <b>removed</b> text',
    },
    {
      'type': 'blank',
      'text': ' first<i> paragraph</i>! it\'s got several lines and- unexpectedly- punctuation signs...',
    },
  ],
  [
    {
      'type': 'blank',
      'text': 'second<b> par</b>. '
    },
    {
      'type': 'add',
      'text': 'added text',
    },
  ],
];

const useStyles = makeStyles({
  card: {
    marginTop: 100,
    padding: 50,
    maxWidth: 920,
  },
  header: {
    marginBottom: 30,
  },
  tooltip: {
    backgroundColor: 'black',
    color: 'white',
  },
});


class DefaultPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <h2>Diff docs</h2>
          </Toolbar>
        </AppBar>
        <div style={{ 'marginTop': '100px' }}>
          <Table style={{ 'maxWidth': '80%', 'margin': '0 auto' }}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Container>
                    <Card style={{ 'padding': '20px' }}>
                      <h3>Document Diff</h3>
                      <Content data={data}/>
                    </Card>
                  </Container>
                </TableCell>
                <TableCell style={{ 'width': 300 }}>
                  Diff shortcuts will be shown here soon
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

    );
  }

}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    diffDocs: state.diffDocs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
