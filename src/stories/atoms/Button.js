import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary button
 */
export const Button = ({ primary, size, label, isDisabled, onClick }) => {
  const mode = primary ? 'is-primary' : 'is-secondary';
  const disabledState = isDisabled ? 'is-disabled' : '';
  return (
    <button
      type="button"
      className={['a-button', `is-${size}`, mode, disabledState].join(' ')}
      disabled={isDisabled}
      onClick={(e) => onClick(e.target.value)}>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  isDisabled: false
};
