import React, { Component } from "react";
import { Image, StatusBar, StyleSheet, CameraRoll } from "react-native";
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
// import ImagePicker from "react-native-image-picker";

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
    selectedImage: null
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

    console.log(permissions, status);
    if(status === 'granted') {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
      }).catch(error => console.log(permissions, { error }));
      if (!image.cancelled) {
        this.setState({ selectedImage: image.uri });
      }
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return (
      <Container>
        <Content padder>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.selectedImage &&
              <Image
                source={{ uri: this.state.selectedImage }}
                style={{ flex: 1, width: 200, height: 200, borderRadius: 10 }}
              />
            }
          </View>
          <Form>
            <Item floatingLabel>
              <Label style={styles.inputColor}>Your Name: </Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.inputColor}>SnapChat Handle: </Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.inputColor}>
                Instagram Handle (optional):{" "}
              </Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.inputColor}>Additional Info: </Label>
              <Input />
            </Item>
            <Button
              rounded
              block
              style={[styles.selectButton, styles.yellowBackground]}
              onPress={this._selectImageHandler}
            >
              <Text style={styles.selectButtonText}>Select Image</Text>
            </Button>
            <Button rounded dark block style={styles.selectButton}>
              <Text>Send</Text>
              <Icon name="send" />
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputColor: {
    color: "#000",
    fontWeight: "bold"
  },
  yellowBackground: {
    backgroundColor: "yellow"
  },
  selectButton: {
    marginTop: 20
  },
  selectButtonText: {
    color: "black"
  }
});
