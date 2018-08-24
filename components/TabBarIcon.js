import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  renderIonIcon = () => {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={this.props.size}
        style={this.props.style}
        color={this.props.color}
      />
    );
  }

  renderMaterialIcons = () => {
    return (
      <Icon.MaterialIcons
        name={this.props.name}
        size={this.props.size}
        style={this.props.style}
        color={this.props.color}
      />
    );
  }

  renderEntypo = () => {
    return (
      <Icon.Entypo
        name={this.props.name}
        size={this.props.size}
        style={this.props.style}
        color={this.props.color}
      />
    );
  }

  _icons = (set) => {
    switch (set) {
      case 'entypo':
        return this.renderEntypo();
      case 'material':
        return this.renderMaterialIcons();
      default:
        return this.renderIonIcon();
    }
  }

  render() {
    return this._icons(this.props.iconSet);
  }
}