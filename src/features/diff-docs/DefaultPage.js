import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import logo from '../../images/logo.png';
import { withRouter } from 'react-router-dom';
import {
  Card,
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography
} from '@material-ui/core';
import { data as stubData } from './mockData';

import Content from './DocumentContent/Content';
import SideBar from './SideBar/SideBar';
import Button from '@material-ui/core/Button';

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
  dlyabossa: {
    background: "#81f981"
  },
});


class DefaultPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: 1,
    };

    this.handleDispatch = this.handleDispatch.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.diffDocs.source !== this.props.diffDocs.source) {
      this.setState({data: this.props.diffDocs.source});
    } 
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

  handlerRedirect = () => {
    this.setState({flag: 0});
  }

  render() {
    if (this.state.flag) {
        return (
        <div>
            <AppBar  style={{background:"#00aaf1"}}>
            <Toolbar>
                <img src={logo} />
                <Typography variant="h4" style={{
                textTransform: 'uppercase',
                fontWeight: 700,
                marginLeft: 20,
                fontSize: 28,
                }}>немойофис</Typography>
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
                        <div style={{"margin": "auto", "width": "fit-content", "margin-top": "20px"}}>
                            <Button
                                variant="contained"
                                style={{"width": "300px", "background": "#00aaf1","color": "white"}}
                                onClick={()=>{this.handlerRedirect()}}
                                >
                                Отправить боссу
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </div>
        </div>
        );
    } else {
        return (
          <div style={{"margin": "auto", "width": "fit-content"}}>
            <img style={{"width": "1600px"}} src="https://media0.giphy.com/media/349qKnoIBHK1i/giphy.gif?cid=790b7611984b20a4eebfc7016f4619bcc27ad9accd132757&rid=giphy.gif" />
          </div>
        );
    }
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
)(withRouter(DefaultPage));
