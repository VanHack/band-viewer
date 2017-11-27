import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => (
  <div className={`notification ${props.severity}`}>
    <button className="delete" />
    {props.message}
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string,
};

Notification.defaultProps = {
  severity: 'is-info',
};

export default Notification;
