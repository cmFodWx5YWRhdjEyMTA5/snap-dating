import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainSwiper from '../screens/MainSwiper';
import SocialLogin from '../screens/SocialLogin';
import SelectPhoto from '../screens/SelectPhoto';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Home: { screen: MainSwiper },
  Home: { screen: SocialLogin },
  AddImage: { screen: SelectPhoto },
});