import React from 'react';
import { Font, AppLoading } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ToastAndroid,
  Platform
} from 'react-native';

export default class SelectPhoto extends React.PureComponent{
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    }
  }

  // static navigationOptions = {
  //   title: 'Ellen\'s SnapDating',
  // };

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  _pressButton = () => {
    if(Platform.OS === 'android') {
      return ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    }
    return alert('Hello world');
  }

  render() {
    if (this.state.fontLoaded){
      return (
        <View style={styles.container}>

          <Image
            source={require('../assets/img/ellen-sees-love.png')}
            style={styles.imageLogo}
          />
          <Text style={styles.smallText}>Welcome to</Text>
          <Text style={styles.textTitle}>Ellen's</Text>
          <Text style={styles.text}>Snap Dating</Text>
          <View style={styles.spaceTop}>
            <Button
              onPress={() => this.props.navigation.navigate("MainSwiper", {})}
              title='Happy Snap Dating'
              color='#000000'
            />
          </View>

        </View>
      );
    } else {
      return (
        <AppLoading />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'montserrat-bold',
    fontSize: 50,
  },
  text: {
    fontSize: 25,
    fontFamily: 'montserrat-bold',
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
  spaceBottom: {
    marginBottom: 20,
  },
  spaceTop: {
    marginTop: 20,
  },
});
