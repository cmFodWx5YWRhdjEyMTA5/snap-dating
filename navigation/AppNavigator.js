import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainSwiper from '../screens/MainSwiper';
// import DeckSwiperExample from '../screens/deckSwiper';
import SelectPhoto from '../screens/SelectPhoto';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Home: { screen: MainSwiper },
  AddImage: { screen: SelectPhoto },
});