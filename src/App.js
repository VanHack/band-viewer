import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBox from './components/SearchBox';
import HeroTitle from './components/HeroTitle';
import BandInfo from './components/BandInfo';

const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleSearch() {
    axios.get(`https://rest.bandsintown.com/artists/${this.state.query}?app_id=band_lookup`)
      .then((res) => {
        this.setState({
          bandInfo: res.data,
        });
      })
      .catch((err) => { console.error(err); });
    axios.get(`https://rest.bandsintown.com/artists/${this.state.query}/events?app_id=band_lookout`)
      .then((res) => {
        this.setState({
          bandEvents: res.data,
        });
      })
      .catch((err) => { console.error(err); });
  }

  handleValueChange(e) {
    e.preventDefault();
    let inputValue = e.target.value;
    this.setState({
      query: inputValue,
    });
  }

  render() {
    return (
      <div>
        <HeroTitle />
        <section className="section">
          <SearchBox 
            query={this.state.query} 
            change={this.handleValueChange.bind(this)}
            action={this.handleSearch.bind(this)} />
        </section>
        <section className="section">
          <BandInfo />
        </section>
      </div>
    );
  }
}

export default App;
