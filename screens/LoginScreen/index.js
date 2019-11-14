import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import styles from './styles';
import logo from '../../assets/logo-1x.png'


export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <View>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
        </View>
      </View>
    );
  }
}

