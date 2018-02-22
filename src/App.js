import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { getData } from './api/sample' 

import Header from './components/Header'
import SortBy from './components/SortBy'

class App extends Component {

  constructor() {
    super();
    this.state = {
      rankByCertification: true
    };
  }

  // Event Handlers for filter. Defaulted to userCertifications
  onFilter = () => {
    const rankByCertification = this.state.rankByCertification
    this.setState({ rankByCertification: !rankByCertification})
  }

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
    const { rankByCertification } = this.state

    return (
      
      <div className="App">
        <Header />
        <SortBy 
          onFilter={this.onFilter}
          rankByCertification={rankByCertification}      
        />
      </div>
    );
  }
}

export default App;
