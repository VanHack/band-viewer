import React, { Component } from 'react';

import SearchBox from './components/SearchBox';
import BandInfo from './components/BandInfo';
import Navbar from './components/Navbar';
import Notification from './components/Notification';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      notifications: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.renderBandInfo = this.renderBandInfo.bind(this);
    this.renderNotifications = this.renderNotifications.bind(this);
  }

  handleSearch() {
    axios.get(`https://rest.bandsintown.com/artists/${this.state.query}?app_id=band_lookup`)
      .then((res) => {
        if (res.data !== null && res.data !== undefined) {
          this.setState({
            bandInfo: res.data,
          });
        }
      })
      .catch((err) => { this.state.notifications.push({ message: err, severity: 'is-danger' }); });
    axios.get(`https://rest.bandsintown.com/artists/${this.state.query}/events?app_id=band_lookout`)
      .then((res) => {
        if (res.data !== null && res.data !== undefined) {
          this.setState({
            bandEvents: res.data,
          });
        }
      })
      .catch((err) => { this.state.notifications.push({ message: err, severity: 'is-danger' }); });
  }

  handleValueChange(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    this.setState({
      query: inputValue,
    });
  }

  renderBandInfo() {
    if (this.state.bandInfo === undefined || this.state.bandInfo === null) {
      return (<br />);
    } else if (this.state.bandEvents === undefined || this.state.bandEvents === null) {
      return (<br />);
    }
    return (<BandInfo info={this.state.bandInfo} events={this.state.bandEvents} />);
  }

  renderNotifications() {
    if (this.state.notifications !== null &&
        this.state.notifications !== undefined &&
        this.state.notifications.length > 0) {
      return this.state.notifications.map(n =>
        (<Notification message={n.message} severity={n.severity} />));
    }
    return (<br />);
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        { this.renderNotifications() }
        <div className="container">
          <SearchBox
            query={this.state.query}
            change={this.handleValueChange}
            action={this.handleSearch}
          />
          <br />
          { this.renderBandInfo() }
        </div>
      </div>
    );
  }
}

export default App;
