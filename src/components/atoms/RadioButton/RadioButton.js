import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

/**
 * Radio button
 */

 const RadioButton = ({ label, groupName, value, isDisabled, isChecked, onChange}) => (
  <div className={`a-radio-button ${isDisabled ? 'is-disabled' : ''}`} >
    <span className="actual-radio">
      <input 
      type="radio" 
      id={value} 
      name={groupName} 
      value={value} 
      disabled={isDisabled} 
      defaultChecked={isChecked} 
      onChange={(e) => onChange(e.target.value)}/>
    </span>
    <label htmlFor={value} className="radio-label">{label}</label>
  </div>
);

export default RadioButton;

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,  
};

RadioButton.defaultProps = {
  isDisabled: false,
  isChecked: false
};
