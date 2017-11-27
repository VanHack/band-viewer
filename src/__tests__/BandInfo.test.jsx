import React from 'react';
import ReactDOM from 'react-dom';
import BandInfo from '../components/BandInfo';

const bandInfo = require('./json_data/band.json');
const events = require('./json_data/events.json');

it('Show band information with events', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BandInfo info={bandInfo} events={events} />, div);
});

it('Show band information without events', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BandInfo info={bandInfo} events={undefined} />, div);
});
