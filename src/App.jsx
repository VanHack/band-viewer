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
    this.addNewNotification = this.addNewNotification.bind(this);
  }

  addNewNotification(notification) {
    this.setState({
      notifications: [...this.state.notifications, notification],
    });
  }

  handleSearch() {
    axios.get(`https://rest.bandsintown.com/artists/${this.state.query}?app_id=band_lookup`)
      .then((res) => {
        if (res.data !== null && res.data !== undefined) {
          if (res.data.name === '') {
            this.addNewNotification({ message: 'Band not found.', severity: 'is-info' });
          } else {
            this.setState({
              bandInfo: res.data,
            });
            // Only execute request if event count is greater than 0
            if (res.data.upcoming_event_count > 0) {
              axios.get(`https://rest.bandsintown.com/artists/${this.state.query}/events?app_id=band_lookout`)
                .then((eventRes) => {
                  if (eventRes.data !== null && eventRes.data !== undefined) {
                    if (eventRes.data.length === 0) {
                      this.addNewNotification({ message: 'Events not available.', severity: 'is-info' });
                    } else {
                      this.setState({
                        bandEvents: eventRes.data,
                      });
                    }
                  }
                })
                .catch((err) => { this.state.notifications.push({ message: err.message, severity: 'is-danger' }); });
            }
          }
        }
      })
      .catch((err) => { this.state.notifications.push({ message: err.message, severity: 'is-danger' }); });
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
        <div className="container">
          { this.renderNotifications() }
        </div>
        <br />
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
