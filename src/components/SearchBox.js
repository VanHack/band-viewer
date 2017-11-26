import React, { Component } from 'react';

const SearchBox = props => (
  <div className="card">
    <div className="card-content">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input 
            className="input" 
            type="text" 
            placeholder="Input the artist or band name..." 
            onChange={props.change}
          />
        </div>
        <div className="control">
          <a className="button is-info" onClick={props.action}>
            Search
          </a>
        </div>
      </div>
    </div>  
  </div>
);

export default SearchBox;