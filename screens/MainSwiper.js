import React from 'react';
import { Font, AppLoading, Constants } from 'expo';
import { Header } from 'react-native-elements';
import {
  StyleSheet,
  Text, View,
  Platform,
  StatusBar, Dimensions,
  Image, Animated,
  PanResponder
} from 'react-native';
import { Content, Container } from 'native-base';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import TabBarIcon from '../components/TabBarIcon';

const Users = [
  { id: 1, uri: require('../assets/img/demo/demo1.jpg') },
  { id: 2, uri: require('../assets/img/demo/demo2.jpg') },
  { id: 3, uri: require('../assets/img/demo/demo3.jpg') },
  { id: 4, uri: { uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }},
  { id: 5, uri: { uri: 'https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&h=350' }},
];

const IS_ANDROID = Platform.OS === 'android';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const marginTop =  (!IS_ANDROID) ? Expo.Constants.statusBarHeight : 0;

export default class MainSwiper extends React.Component {
  state = {
    fontLoaded: false,
    currentIndex: 0
  }

  // componentDidMount() { // Set the status bar to be hidden
    // StatusBar.setHidden(true);
  // }

  renderSwipeCard = () => {
    return Users.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            backgroundColor: 'black'
          }}
        >
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
            source={item.uri}
          />
        </View>
      );
    }).reverse();
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.addButton}>
          <TabBarIcon
            style={styles.buttonIcon}
            focused={false}
            name='add-a-photo'
          />
        </View>
        <Swiper
          showsButtons={true}
          showsPagination={false}
          loadMinimalLoader={<AppLoading />}
          loop={false}
          width={Platform.OS === 'ios' ? '100%' : SCREEN_WIDTH}
        >
          {this.renderSwipeCard()}
        </Swiper>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    top: 0,
    right: 0,
    width: '100%',
    height: 64,
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    zIndex: 1,
    elevation: 100
  },
  buttonIcon: {
    marginBottom: -3,
    color: '#FFF',
    alignSelf: 'flex-end',
  }
});
