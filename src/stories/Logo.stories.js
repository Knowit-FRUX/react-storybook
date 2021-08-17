import React from 'react';
import Logo from '../components/atoms/Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium'
};
