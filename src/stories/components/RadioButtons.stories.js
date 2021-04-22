import React from 'react';
import { RadioButtons } from './RadioButtons';

export default {
  title: 'Components/Radio buttons',
  component: RadioButtons,
};

const Template = (args) => <RadioButtons {...args} />;

const data = [{
  groupName: 'fruits',
  label: 'Pear',
  value: 'pear',
  isDisabled: false,
  isChecked: true
},
{
  groupName: 'fruits',
  label: 'Banana',
  value: 'banana',
  isDisabled: false,
  isChecked: false
}];

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
  label: 'Select a fruit',
  radios: data,
  onChange: (val) => {console.log('Radio clicked!', val);}
};
