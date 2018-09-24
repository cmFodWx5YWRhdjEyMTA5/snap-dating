import React, { PureComponent } from "react";
import { StyleSheet, View, StatusBar, Text, Image, TouchableOpacity } from "react-native";
import Expo, { LinearGradient } from "expo";
import { Icon } from 'native-base';
import { FBAPI_ID } from 'react-native-dotenv';
 
const remote = [
  {
    uri:
      "http://aprilbraswell.com/blog/wp-content/uploads/2009/11/Attractive-Cross-Racial-Dating-Couple.jpg"
  },
  {
    uri: require("../assets/img/ellen-sees-love.png")
  },
  {
    uri:
      "https://static1.squarespace.com/static/547a81b8e4b0db8f16a72594/t/56cad9e80c4a683a7fc49c5d/1456136921772/interracial-couple1.jpg"
  },
  {
    uri:
      "http://www.ukinterracialdating.co.uk/wp-content/uploads/2016/06/IM1.jpg"
  }
];

export default class SocialLogin extends PureComponent {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // Set the status bar to be hidden
    StatusBar.setBarStyle("dark-content");
  }

  _renderFacebookButton = () => {
    return (
      <TouchableOpacity
        style={styles.facebookButton}
        onPress={() => this._FBLoginManager()}
      >
        <Text style={styles.facebookButtonText}>
          <Icon type="FontAwesome" name="facebook-f" style={{ fontSize: 17, marginRight: 20 }} />{"   "}
          Connect with <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
        </Text>
      </TouchableOpacity>
    );
  }

  _FBLoginManager = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FBAPI_ID, {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const actualResponse = await response.json();
      console.log('response ===> ', actualResponse);
      // use the facebook data in database
    }
  }

  render() {
    const resizeMode = "cover";
    const text = "I am some centered text";
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <View style={styles.wrapper}>
          <View style={styles.backgroundLayout}>
            <Image
              style={{
                flex: 1,
                resizeMode
              }}
              blurRadius={1}
              source={{ uri: remote[0].uri }}
            />
          </View>
          <View style={styles.innerContent}>
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
              style={styles.innerTopContent}
            >
              <Image source={remote[1].uri} style={{ marginBottom: -40 }} />
              <Text style={styles.innerContentTextHeader}>Ellen's</Text>
              <Text style={styles.innerContentTextLittleHeader}>
                Snap Dating
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.innerContent}>
            {this._renderFacebookButton()}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  backgroundLayout: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  innerContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .6)",
    justifyContent: "center",
    alignItems: "center"
  },
  innerTopContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0, left: 0,
    paddingTop: 100
  },
  innerContentText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 40,
    fontFamily: "montserrat"
  },
  innerContentTextHeader: {
    fontSize: 55,
    color: "yellow",
    fontFamily: "montserrat-bold"
  },
  innerContentTextLittleHeader: {
    fontSize: 28,
    // color: '#FCFCFC',
    color: "yellow",
    fontFamily: "montserrat"
  },
  facebookButtonText: {
    // color: '#FFF',
    color: '#000',
    fontFamily: 'montserrat',
  },
  facebookButton: {
    backgroundColor: 'yellow', // facebook blue backgroundColor: '#4267b2',
    borderRadius: 5,
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
