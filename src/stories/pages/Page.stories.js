import React from 'react';
import { Page } from './Page';
import * as HeaderWithLoginStories from '../components/HeaderWithLogin.stories';

export default {
  title: 'Pages/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderWithLoginStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderWithLoginStories.LoggedOut.args,
};
