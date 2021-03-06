import React, { Component } from "react";
import { Image, StatusBar, StyleSheet, CameraRoll, ScrollView, TextInput, AsyncStorage } from "react-native";
import { Root } from "native-base";
import { Font, AppLoading, ImagePicker, Permissions } from "expo";
import {
  Container,
  Header,
  View,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Title,
  Right,
  Button,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import shortid from 'shortid';
import Swiper from "react-native-swiper";
import InputFIelds from "../components/InputFIelds";
import InstructionSteps from '../components/InstructionsSteps';

const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("../assets/img/demo/demo1.jpg")
  },
  {
    text: "Card two",
    name: "two",
    image: require("../assets/img/demo/demo2.jpg")
  },
  {
    text: "Card three",
    name: "three",
    image: require("../assets/img/demo/demo3.jpg")
  }
];

export default class SelectPhoto extends Component {
  state = {
    loading: true,
    selectedImage: null,
    selectedImageObject: {},
    ig: '',
    name: '',
    snap: '',
    extra: '',
    isValid: false,
  };

  static navigationOptions = {
    title: "Add a photo",
    headerStyle: { backgroundColor: "yellow" }
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
    StatusBar.setHidden(false);
    StatusBar.setBarStyle("dark-content");
  }

  _resetImage = () => {
    this.setState({
      selectedImage: null
    });
  };

  _selectImageHandler = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);
    if(status === 'granted') {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
      }).catch(error => console.log(permissions, { error }));
      if (!image.cancelled) {
        this.setState({
          selectedImage: image.uri,
          selectedImageObject: image
        }, () => this._isValid());
      }
    }
  };

  _handleInputChange = (textValue, field) => {
    this.setState({
      [field]: textValue
    }, () => this._isValid());
  }

  _isValid = () => {
    const { snap, ig, extra, name, selectedImage } = this.state;
    if((name && snap ) !== '' && selectedImage){
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  }

  _handleSubmit() {
    if(this.state.isValid) {
      console.log(this.state);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <ScrollView
        style={{ backgroundColor: '#FFF', padding: 10 }}
      >
        {/* <InstructionSteps /> */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {this.state.selectedImage &&
            <Image
              source={{ uri: this.state.selectedImage }}
              style={{ flex: 1, width: 200, height: 200, borderRadius: 10 }}
            />
          }
        </View>
        <View style={{ padding: 20 }}>
          <InputFIelds
            placeholder="Your Name:"
            onChange={(text) => this._handleInputChange(text, 'name')}
          />
          <InputFIelds
            placeholder="SnapChat Handle:"
            onChange={(text) => this._handleInputChange(text, 'snap')}
          />
          <InputFIelds
            placeholder="Instagram Handle (optional):"
            onChange={(text) => this._handleInputChange(text, 'ig')}
          />
          <InputFIelds
            placeholder="Additional Info:"
            onChange={(text) => this._handleInputChange(text, 'extra')}
          />
          <Button
            rounded
            block
            style={[styles.selectButton, styles.yellowBackground]}
            onPress={this._selectImageHandler}
          >
            <Text style={styles.selectButtonText}>Select Image</Text>
          </Button>
          <Button
            disabled={!this.state.isValid}
            style={!this.state.isValid ? styles.disabledButton : styles.selectButton}
            rounded dark block
            onPress={() => this._handleSubmit()}
          >
            <Text>Send</Text>
            <Icon name="send" />
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  yellowBackground: {
    backgroundColor: "yellow"
  },
  selectButton: {
    marginTop: 20
  },
  disabledButton: {
    backgroundColor: 'grey',
    marginTop: 20,
  },
  selectButtonText: {
    color: "black"
  }
});
