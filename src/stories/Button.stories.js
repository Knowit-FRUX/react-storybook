import React from 'react';
import Button from '../components/atoms/Button';

export default {
  title: 'Atoms/Button submit',
  component: Button,
  argTypes: {
    /* backgroundColor: { control: 'color' }, */
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};

