import React from "react";
import { Font, AppLoading, Constants, LinearGradient } from "expo";
import { Header } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Button, Icon } from "native-base";
import { Toast } from "native-base";
import Swiper from "react-native-swiper";
import Carousel from "react-native-snap-carousel";
import TabBarIcon from "../components/TabBarIcon";

const Users = [
  { id: 1, uri: require("../assets/img/demo/demo1.jpg") },
  { id: 2, uri: require("../assets/img/demo/demo2.jpg") },
  { id: 3, uri: require("../assets/img/demo/demo3.jpg") },
  {
    id: 4,
    uri: {
      uri:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  },
  {
    id: 5,
    uri: {
      uri:
        "https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&h=350"
    }
  }
];

const IS_ANDROID = Platform.OS === "android";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const marginTop = Expo.Constants.statusBarHeight;
const headerHeight = 64;

export default class MainSwiper extends React.Component {
  state = {
    fontLoaded: false,
    currentIndex: 0,
    showInfo: true,
    opacity: new Animated.Value(1),
  }

  static navigationOptions = ({ navigation: { navigate } }) => {
    return {
      header: (
        <View
          style={{
            height: headerHeight,
            marginTop,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            right: 0,
            width: SCREEN_WIDTH,
            justifyContent: "center",
          }}
        >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
          style={{ paddingHorizontal: 20, }}
        >
          <View>
            <Button
              iconRight
              light
              transparent
              style={{
                marginBottom: -3,
                alignSelf: "flex-end",
              }}
              onPress={() => navigate('AddImage')}
            >
              <Icon type="MaterialIcons" name="add-a-photo" />
            </Button>
          </View>
        </LinearGradient>
        </View>
      )
    }
  };

  componentDidMount() { // Set the status bar to be hidden
    StatusBar.setHidden(!this.state.showInfo);
  }

  _toggleInfoBox = value => {
    Animated.timing(this.state.opacity, {
      toValue: value,
      duration: 400
    }).start();
    this.setState({
      showInfo: !this.state.showInfo
    }, StatusBar.setHidden(this.state.showInfo));
  };

  _callInfoBox = () => {
    if (this.state.showInfo) {
      return this._toggleInfoBox(0);
    }
    return this._toggleInfoBox(1);
  };

  _showInfo = () => {
    return (
      <Animated.View
        style={[styles.infoContainer, { opacity: this.state.opacity }]}
      >
        <View style={styles.infoName}>
          <Text style={styles.infoHeader}>Name: </Text>
          <Text style={styles.infoText}>Gabriel Micah</Text>
        </View>
        <View style={styles.infoName}>
          <Text style={styles.infoHeader}>SnapChat: </Text>
          <Text style={styles.infoText}>gmicah24</Text>
        </View>
        <View style={styles.infoName}>
          <Text style={styles.infoHeader}>IG: </Text>
          <Text style={styles.infoText}>iam_topsey00</Text>
        </View>
        <View style={styles.infoName}>
          <Text style={styles.infoText}>
            From Nigeria, looking for a friend
          </Text>
        </View>
      </Animated.View>
    );
  };

  _renderSwipeImage = image => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this._callInfoBox()}
      >
        <Image
          style={{
            flex: 1,
            marginLeft: "auto",
            marginRight: "auto",
            height: null,
            width: "98%",
            resizeMode: "contain"
          }}
          source={image}
        />
      </TouchableWithoutFeedback>
    );
  };

  renderSwipeCard = () => {
    return Users.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            backgroundColor: "black",
            position: "relative"
          }}
        >
          {this._renderSwipeImage(item.uri)}
          {this._showInfo()}
        </View>
      );
    }).reverse();
  };

  render() {
    StatusBar.setBarStyle('light-content');
    return (
      <React.Fragment>
        <Swiper
          showsButtons={false}
          showsPagination={false}
          loop={false}
        >
          {this.renderSwipeCard()}
        </Swiper>
      </React.Fragment>
    );
  }
}

const whiteColor = "#FFF";
const fontSize = 20;

const styles = StyleSheet.create({
  addButton: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  buttonIcon: {
    marginBottom: -3,
    alignSelf: "flex-end",
    zIndex: 2,
    elevation: 100,
  },
  headerButton: {
    color: whiteColor
  },
  swiperBtn: {
    color: "yellow"
  },
  infoContainer: {
    width: SCREEN_WIDTH,
    height: "auto",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, .5)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  infoName: {
    flex: 1,
    flexDirection: "row"
  },
  infoHeader: {
    fontWeight: "900",
    fontSize,
    color: whiteColor,
    fontFamily: "montserrat-bold"
  },
  infoText: {
    flex: 1,
    color: whiteColor,
    fontSize,
    flexWrap: "wrap",
    fontFamily: "montserrat"
  }
});
