import React, { Component } from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View, Image } from 'react-native';
// import backButton from '../../../../assets/backarrow.png';
import styles from './styles';

export default class Buttons extends Component {
  selectButton = ({ type, value, style, onPress, isLoading }) => {
    switch (type) {
      default:
        return(
          <TouchableOpacity
            style={[styles.bg_home, style, isLoading ? styles.disabled : {}]}
            onPress={onPress}
            disabled={isLoading}
          >
            <ActivityIndicator
              animating={isLoading || false}
              color='#fff'
              size='small' 
              style={{ position: 'absolute', right: 40 }}
            />
            <Text style={styles.bg_home_text}>{value}</Text>
          </TouchableOpacity>
        );
    }
  }

  render() {
    return this.selectButton(this.props);
  }
}
