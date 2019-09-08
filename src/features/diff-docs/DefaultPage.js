import React from 'react';
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
} from '@material-ui/core';
import { data as stubData } from './mockData';

import Content from './DocumentContent/Content';
import SideBar from './SideBar/SideBar';

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
    this.state = {
      data: stubData,
    };

    this.handleDispatch = this.handleDispatch.bind(this);
  }


  handleDispatch(event) {
    console.log(event);
    const [row, idx] = event.tag.split('-').map(s => Number.parseInt(s, 10));
    console.log(row, idx);

    switch (event.type) {
      case 'ACCEPT':
        this.setState(prev => {
          const data = prev.data;
          data[row][idx].type = 'reviewed';
          return { data: data };
        });
        break;
      case 'REJECT':
        this.setState(prev => {
          const patched = prev.data;
          prev[row] = prev.data[row].splice(idx, 1);
          return { data: patched };
        });
        break;
      case 'CHOOSE':
        const [r, c, i] = event.tag.split('-').map(s => Number.parseInt(s, 10));
        this.setState(prev => {
          const patched = prev.data;
          const toPrepend = patched[r][c].options[i];
          patched[r][c].options = patched[r][c].options.splice(i-1, 1);
          patched[r][c].options.unshift(toPrepend);
          patched[r][c].type = 'app_choose';
          return { data: patched };
        });
        break;
      default:
    }


  }

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar style={{ background: '#00AAF2' }}>
            <h2>Diff docs</h2>
          </Toolbar>
        </AppBar>
        <div style={{ 'marginTop': '100px' }}>
          <Table style={{ 'maxWidth': '80%', 'margin': '0 auto' }}>
            <TableBody>
              <TableRow>
                <TableCell style={{ verticalAlign: 'top' }}>
                  <Container>
                    <Card style={{ 'padding': '20px' }}>
                      <h3>Document Diff</h3>
                      <Content data={this.state.data} dispatch={this.handleDispatch}/>
                    </Card>
                  </Container>
                </TableCell>
                <TableCell style={{ 'width': 300, verticalAlign: 'top' }}>
                  <SideBar data={this.state.data}/>
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
