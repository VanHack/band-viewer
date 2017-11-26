import React from 'react';
import PropTypes from 'prop-types';
import EventInfo from './EventInfo';

const BandInfo = (props) => {
  const events = props.events.map(event => (
    <EventInfo key={event.id} bandName={props.info.name} event={event} />
  ));
  return (
    <div className="columns">
      <div className="column is-one-third">
        <nav className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={props.info.image_url} alt="" />
            </figure>
          </div>
          <header className="card-header">
            <p className="card-header-title">{props.info.name}</p>
          </header>
          <div className="card-content">
            Upcoming events: {props.info.upcoming_event_count}
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                View on <a href={props.info.url}>Bands in Town</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                View on <a href={props.info.facebook_page_url}>Facebook</a>
              </span>
            </p>
          </footer>
        </nav>
      </div>
      <div className="column">
        <nav className="card">
          <header className="card-header">
            <p className="card-header-title">Next Events</p>
          </header>
          <div className="card-content">
            {events}
          </div>
        </nav>
      </div>
    </div>);
};

BandInfo.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    venue: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      name: PropTypes.string,
      region: PropTypes.string,
    }),
    datetime: PropTypes.string,
    url: PropTypes.string,
    on_sale_datetime: PropTypes.string,
    id: PropTypes.string,
    artist_id: PropTypes.string,
    lineup: PropTypes.arrayOf(PropTypes.string),
    offers: PropTypes.arrayOf(PropTypes.shape({
      status: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
    })),
  })).isRequired,
  info: PropTypes.shape({
    facebook_page_url: PropTypes.string,
    id: PropTypes.string,
    image_url: PropTypes.string,
    mbid: PropTypes.string,
    name: PropTypes.string,
    thumb_url: PropTypes.string,
    tracker_count: PropTypes.number,
    upcoming_event_count: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};

export default BandInfo;
