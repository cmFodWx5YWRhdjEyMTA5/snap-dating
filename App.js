import React from 'react';
import Expo, { AppLoading, Asset, Font, Icon } from 'expo';
import { Platform, StatusBar, View, Navigator } from 'react-native';
import { createStackNavigator } from "react-navigation";
import AppNavigator from './navigation/AppNavigator';

const isAndroid = Platform.OS === 'android';
const marginTop =  (!isAndroid) ? Expo.Constants.statusBarHeight : 0;

export default class App extends React.PureComponent {
  state = {
    isLoadingComplete: false,
  };

  render() {
    const color = isAndroid ? 'transparent' : 'transparent';
    const barStyle = "light-content";

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <React.Fragment>
          <StatusBar
            backgroundColor={color}
            barStyle={barStyle}
            translucent={true}
          />
          <AppNavigator />
        </React.Fragment>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/img/splash.png'),
      ]),
      Font.loadAsync({
        'montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        'Arial': require('./assets/fonts/Arial/Arial.ttf'),
        'Material Icons': require("native-base/Fonts/MaterialIcons.ttf"),
        'MaterialIcons': require("native-base/Fonts/MaterialIcons.ttf")
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
