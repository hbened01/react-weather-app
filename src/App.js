import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid, Row, Col } from 'react-flexbox-grid'; 
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  'Buenos Aires, Ar',
  'Bogota, Col',
  'Mexico, Mex',
  'Washington, Us', 
  'Madrid, Es',
  'Lima, Pe',
  'Caracas, Ve',
//   'Quito, Ec'
]

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <div className='title'>
                <AppBar position="static"> 
                  <Toolbar>
                    <Typography align="center" variant="title" color="inherit">
                      WEATHER APLICATION
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
            </Col>
            <Col xs={12} sm={6}>
              <Paper elevation={4}>
                <div className='details'>
                    <ForecastExtendedContainer/>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  };
};

export default App;