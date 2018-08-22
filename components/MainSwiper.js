import React from 'react';
import { Font, AppLoading, Constants } from 'expo';
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

const Users = [
  { id: 1, uri: require('../assets/img/demo/demo1.jpg') },
  { id: 2, uri: require('../assets/img/demo/demo2.jpg') },
  { id: 3, uri: require('../assets/img/demo/demo3.jpg') },
];

const IS_ANDROID = Platform.OS === 'android';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MainSwiper extends React.Component {
  state = {
    fontLoaded: false,
    currentIndex: 0
  }

  // position = new Animated.ValueXY()

  // componentWillMount() {
  //   this.PanResponder = PanResponder.create({

  //     onStartShouldSetPanResponder: (event, gestureState) => true,
  //     onPanResponderMove: (event, gestureState) => {
  //       this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
  //     },
  //     onPanResponderRelease: (event, gestureState) => {}

  //   });
  // }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat-bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'Arial': require('../assets/fonts/Arial/Arial.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  renderSwipeCard = () => {
    return Users.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
          }}
        >
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
            source={item.uri}
          />
        </View>
      );
    }).reverse();
  }

  render() {
    if (this.state.fontLoaded){
      return (
        <React.Fragment>
          <View style={styles.headerStyle}>
            <Text style={styles.headerText}>header</Text>
          </View>
          <Swiper
            showsPagination={true}
            loadMinimalLoader={<AppLoading />}
            dotStyle={{ height: 5 }}
            activeDotStyle={{ width: 100, height: 5, backgroundColor: 'yellow' }}
            loop={false}
            width={Platform.OS === 'ios' ? '100%' : SCREEN_WIDTH}
          >
            {this.renderSwipeCard()}
          </Swiper>
        </React.Fragment>
      );
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    flex: 1,
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    width: '100%',
    height: 64,
    marginTop: Constants.statusBarHeight,
    // alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center'
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
  },
  swiperStyle: {
    width: Platform.OS === 'ios' ? '100%' : SCREEN_WIDTH
  },
  wrapper: {
    // flex: 1,
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#333',
    fontSize: 30,
    fontWeight: '100',
  }
});
