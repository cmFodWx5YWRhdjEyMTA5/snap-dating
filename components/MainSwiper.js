import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Content, Container } from 'native-base';
import Swiper from 'react-native-swiper';

export default class MainSwiper extends React.Component {

  static navigationOptions = {
    title: 'Happy Snap-dating',
    headerStyle: {
      marginTop: Platform.OS === 'ios' ? Expo.Constants.statusBarHeight : 0,
      backgroundColor: '#FFFFFF'
    }
  };

  render() {
    return (
      <Container>
        <Content>

          <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
            <View style={styles.slider}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slider}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slider}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
  },
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#333',
    fontSize: 30,
    fontWeight: '100',
  }
});
