import React from 'react';

import { Header } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const H1 = Template.bind({});
H1.args = {
  headerType: 1,
  text: 'Header 1'
};

export const H2 = Template.bind({});
H2.args = {
  headerType: 2,
  text: 'Header 2'
};

export const H3 = Template.bind({});
H3.args = {
  headerType: 3,
  text: 'Header 3'
};
