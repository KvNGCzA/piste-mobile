import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import menu from '../../../../assets/icons/menu.png';
import { withNavigation } from 'react-navigation';

class HeaderMenu extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Menu')
        }}
      >
        <Image source={menu} style={{
          height: 30,
          width: 30,
          resizeMode: 'contain',
          marginLeft: 20
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(HeaderMenu);