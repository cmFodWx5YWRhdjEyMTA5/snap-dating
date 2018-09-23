import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
    // marginBottom: -100,
    justifyContent: "center"
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    // marginTop: 20,
    padding: 15,
    height: "100%"
  },
  InstructionStepsTitle: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold"
  },
  text: {
    color: "grey",
    // color: '#C5C5C5',
    fontSize: 15
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginBottom: -5
  }
});

export default class InstructionSteps extends Component {
  render() {
    const icon = [{ uri: require("../assets/img/ellen-in-love.png") }];
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
        <Text style={styles.InstructionStepsTitle}>How to snap date</Text>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          loop={false}
          showsPagination={false}
        >
          <View style={styles.slide}>
            <Text style={styles.text}>Fill in the input fields above:</Text>
            <Text style={styles.text}>
              Information: name, snapchat ID, instagram Handle (Optional)
            </Text>
            <Text style={styles.text}>
              what you wish for: Husband, wife, girlfriend, firend, nack mate.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Now others can add you on snapchat or Instagram
            </Text>
            <Text style={styles.text}>
              Feel free to add others you find as well.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>
              Lets keep it a good and friendly environment!
            </Text>
            <Text style={styles.text}>Do not send inappropriate pictures!</Text>
            <Text style={styles.text}>Do not practice 419!</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>Meet new people 😍!</Text>
            <Text style={styles.text}>
              Have Fun{" "}
              <Image
                style={styles.imageIcon}
                source={icon[0].uri}
              />
              !
            </Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
