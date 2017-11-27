import React from 'react';
import ReactDOM from 'react-dom';
import EventInfo from '../components/EventInfo';

const bandInfo = require('./json_data/band.json');
const events = require('./json_data/events.json');

it('Show event information', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventInfo key={0} bandName={bandInfo.name} event={events[0]} />, div);
});
