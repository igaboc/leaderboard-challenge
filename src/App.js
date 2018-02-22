import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { getData } from './api/sample' 

import Header from './components/Header'
import SortBy from './components/SortBy'
import Leaderboard from './components/Leaderboard'

class App extends Component {

  constructor() {
    super();
    this.state = {
      rankByCertification: true,
      certificationCount: [],
      profileData: [],
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
        // Merge userCertification and userProfile together by userId
        let merge = _.map(data.data.getUserCertificationsCount, function(item) {
          return _.merge(item, _.find(data.data.getUserProfileBatch, { 'userId' : item.userId }));
        });
        this.setState({
          profileData: data.data.getUserProfileBatch,
          certificationCount: data.data.getUserCertificationsCount
        })
      })
  }

  // When this app first appears on screen
  componentDidMount() {
    this.load()
  }

  render() {
    const { rankByCertification, certificationCount, profileData } = this.state

    return (
      
      <div className="App">
        <div className='container'>
          <Header />
          <SortBy 
            onFilter={this.onFilter}
            rankByCertification={ rankByCertification }      
          />
          <Leaderboard 
            rankByCertification={ rankByCertification }
            certificationCount={ certificationCount }
            profileData={ profileData }
          />
        </div>
      </div>
    );
  }
}

export default App;
