import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../components/Notification';

const err = 'Error message';
const severity = 'is-danger';

it('Render Notification with all props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification message={err.message} severity={severity} />, div);
});

it('Render Notification without severity property', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification message={err.message} />, div);
});

