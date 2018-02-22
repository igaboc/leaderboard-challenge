import React, { Component } from 'react';
import './App.css';
import { getData } from './api/sample' 

import Header from './components/Header'

class App extends Component {



  load() {

    // Set State for Data loaded from api
    getData()
      .then((data) => {
        console.log(data, 'data')
      })
  }

  // When this app first appears on screen
  componentDidMount() {
    this.load()
  }

  render() {
    return (
      
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;
