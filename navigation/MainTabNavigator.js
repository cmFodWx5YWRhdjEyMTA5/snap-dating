import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainSwiper from '../screens/MainSwiper';

export const HomeStack = createStackNavigator({
  Home: MainSwiper,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Add',
  backgroundColor: 'yellow',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'home'
          : 'home'
      }
    />
  ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
});
