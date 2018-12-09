import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-msg1">
          <p>
            WEATHER APLICATION (APP REACTJS)
          </p>
        </header>
        <header className="App-msg2">
          <div className="App-title"><WeatherLocation city='Buenos Aires, Ar'></WeatherLocation></div>
        </header>
      </div>
    );
  };
};

export default App;
