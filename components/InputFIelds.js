import React, { PureComponent } from "react";
import { TextInput, StyleSheet } from 'react-native';

export default class InputFields extends PureComponent {
  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        onChangeText={this.props.onChange}
        underlineColorAndroid="rgba(0,0,0,0)"
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
    // paddingHorizontal: 10,
  },
});
