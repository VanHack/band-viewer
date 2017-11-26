import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const EventInfo = props => (
  <article className="media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.event.venue.city},{props.event.venue.country}</strong>
          <span> - </span>
          <small>{moment(props.event.datetime).fromNow()}</small><br />
          <a href={`https://www.google.com/maps/?q=${props.event.venue.latitude},${props.event.venue.longitude}`}>{props.event.venue.name}</a>
        </p>
      </div>
    </div>
  </article>
);

EventInfo.propTypes = {
  event: PropTypes.shape({
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
  }).isRequired,
};

export default EventInfo;
