import React from 'react';
import Expo from 'expo';
import { Platform, StatusBar, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import MainSwiper from './components/MainSwiper';
import SelectPhoto from './screens/SelectPhoto';

const ScreenRouter = createStackNavigator({
  Home: { screen: SelectPhoto },
  MainSwiper: { screen: MainSwiper },
},
{
  navigationOptions: {
    headerStyle: {
      marginTop: Platform.OS === 'ios' ? Expo.Constants.statusBarHeight : 0,
      backgroundColor: 'yellow',
    },
    headerTintColor: '#000000',
  }
}
);

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor="yellow"
          barStyle="dark-content"
        />
        <ScreenRouter />
      </React.Fragment>
    );
  }
}
