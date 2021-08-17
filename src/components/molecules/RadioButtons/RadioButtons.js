import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../../atoms/RadioButton';
import './RadioButtons.css';

const RadioButtons = ({ label, radios, onChange, isDisabled }) => {
  const radioButtons = [];

  for (const [index, value] of radios.entries()) {
    radioButtons.push(<RadioButton key={index} label={value.label} groupName={value.groupName} 
      value={value.value} isDisabled={isDisabled || value.isDisabled} isChecked={value.isChecked} onChange={onChange} />)
  }

  return (
    <fieldset className="c-radio-button">
      <legend>{label}</legend>
      {radioButtons}
    </fieldset>
  )
};

export default RadioButtons;

RadioButtons.propTypes = {
  label: PropTypes.string.isRequired,
  radios: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool
};

RadioButtons.defaultProps = {
  
};
