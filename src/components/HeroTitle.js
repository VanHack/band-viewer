import React, { Component } from 'react';

class HeroTitle extends Component {
  render() {
    return (
      <section className="hero is-dark is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="band-viewer.png" alt="Logo" />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <a className="navbar-item">
                    Examples
                  </a>
                  <a className="navbar-item">
                    Documentation
                  </a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Search
            </h1>
            <h2 className="subtitle">
              Get updates about your favorite bands!
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroTitle;