import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => (
  <div className={`notification ${props.severity || 'is-info'}`}>
    <button className="delete" />
    {props.message}
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};

export default Notification;
