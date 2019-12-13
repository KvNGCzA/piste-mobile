import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import chevronBack from '../../../../assets/chevronBack.png';

class HeaderBack extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack()
        }}
      >
        <Image source={chevronBack} style={{
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

export default withNavigation(HeaderBack);