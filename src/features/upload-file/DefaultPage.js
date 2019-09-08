import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import logo from '../../images/logo.png';
import CloseIcon from '@material-ui/icons/Close';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider, Typography,

} from '@material-ui/core';

export class DefaultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        files: [],
        flag: 1
    };
  }

  static propTypes = {
    uploadFile: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };



  hendlerFIles = (event) => {
      let files = Object.keys(event.target.files).map((key) => {
          return event.target.files[key];
      });
      this.setState({files: files})
  }

  deletListFile = (name) => {
    this.setState({files: this.state.files.filter(item => {
        return item.name !== name;
    })});
  }

  handlerRedirect = () => {
    this.setState({flag: 0});
    setTimeout(() => {
      this.props.history.push('/diff-docs')
    }, 2500)
  }

  render() {
    let listFiles = this.state.files.map((item, id) => {
      return (
        <div>
          <ListItem>
              <ListItemText
                primary={item.name}
              />
              <CloseIcon color="secondary" onClick={() => this.deletListFile(item.name)}/>
          </ListItem>
          <Divider />
        </div>
      );
    });
    if (this.state.flag) {
      return (
        <div className="upload-files-default-page">
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
                  <TableCell>
                    <Container>
                      <div style={{"margin": "auto", "width": "fit-content"}}>
                        <img src="https://i.pinimg.com/originals/db/f6/cb/dbf6cb4582e519a273212c188e501d79.gif"/>
                      </div>
                      <div style={{ "text-align": "center"}}>
                          <div>
                              <Button
                                  variant="contained"
                                  component="label"
                                  color="primary"
                                  >
                                      Выбрать файлы
                                      <input
                                          type="file"
                                          multiple="multiple"
                                          style={{ display: "none" }}
                                          onChange={(event)=>this.hendlerFIles(event)}
                                      />
                              </Button>
                          </div>
                          <div style={{"max-width": "362px", "margin": "auto"}}>
                            <List>
                              {listFiles}
                            </List>
                          </div>
                          <div>
                              <Button
                                  variant="contained"
                                  component="label"
                                  color="secondary"
                                  onClick={()=>{this.handlerRedirect()}}
                                  >
                                      Объединить
                              </Button>
                          </div>
                      </div>
                    </Container>
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
    uploadFile: state.uploadFile,
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
)(withRouter(DefaultPage));
