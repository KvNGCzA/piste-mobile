import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import addButton from '../../../assets/addButton.png';

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20
        }}
        onPress={() => {
          alert('add')
        }}
      >
        <Image source={addButton} style={{
            height: 70,
            width: 70,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default AddButton;