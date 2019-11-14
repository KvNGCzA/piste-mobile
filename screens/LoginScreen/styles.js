import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../commons/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: colors.primaryColor,
    // borderWidth: 1
  },
  logo: {
    height: 30,
    width: 30,
    resizeMode: 'cover'
  }
});
