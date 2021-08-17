import React from 'react';
import BasicPage from '../components/pages/BasicPage';
import * as HeaderWithLoginStories from './HeaderWithLogin.stories';

export default {
  title: 'Pages/BasicPage',
  component: BasicPage,
};

const Template = (args) => <BasicPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderWithLoginStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderWithLoginStories.LoggedOut.args,
};
