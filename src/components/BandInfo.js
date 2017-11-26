import React, { Component } from 'react';

const BandInfo = props => (
  <div className="tabs is-centered">
    <ul>
      <li className="is-active"><a>Profile</a></li>
      <li><a>Events</a></li>
      <li><a>Videos</a></li>
      <li><a>Lyrics</a></li>
    </ul>
  </div>
);

export default BandInfo;