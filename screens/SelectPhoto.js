import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
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
  Button
} from "native-base";

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
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
    StatusBar.setHidden(false);
    StatusBar.setBarStyle("dark-content");
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
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
