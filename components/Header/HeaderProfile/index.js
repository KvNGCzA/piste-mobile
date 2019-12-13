import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import profileImage from '../../../assets/profileImage.jpg';
import { withNavigation } from 'react-navigation';

class HeaderProfile extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ProfileScreen')
        }}
      >
        <Image
          source={profileImage}
          style={{
            height: 40,
            width: 40,
            resizeMode: 'cover',
            marginRight: 20,
            borderRadius: 20
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(HeaderProfile);