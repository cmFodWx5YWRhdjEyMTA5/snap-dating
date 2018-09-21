import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
    padding: 10,
    height: '100%',
  },
  text: {
    color: '#000',
    // color: '#C5C5C5',
    fontSize: 15,
  }
})

export default class InstructionSteps extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}
