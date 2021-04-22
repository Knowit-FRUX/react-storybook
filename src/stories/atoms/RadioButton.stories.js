import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Atoms/Button radio',
  component: RadioButton,
  argTypes: {},
};

const Template = (args) => <RadioButton {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  groupName: 'Fruits',
  label: 'Pineapple',
  buttonId: 'pineapple',
  value: 'pineapple'
};

