import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ primary, size }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <div className={['a-logo', `is-${size}`, `is-${mode}`].join(' ')}>a</div>
  );
};

export default Logo;

Logo.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  primary: true,
  size: 'medium'
};
