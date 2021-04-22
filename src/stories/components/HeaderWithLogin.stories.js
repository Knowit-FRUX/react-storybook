import React from 'react';

import { HeaderWithLogin } from './HeaderWithLogin';

export default {
  title: 'Components/Header with login',
  component: HeaderWithLogin,
};

const Template = (args) => <HeaderWithLogin {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
