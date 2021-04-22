import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export const Header = ({ headerType, text }) => {
  if(headerType === 1) {
    return (
      <h1 className="a-header-1">{text}</h1>
    );
  } else if(headerType === 2) {
    return (
      <h2 className="a-header-2">{text}</h2>
    );
  } else {
    return (
      <h3 className="a-header-3">{text}</h3>
    );
  }
  
};

Header.propTypes = {
  headerType: PropTypes.number,
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  headerType: 2,
  text: 'Header'
};
