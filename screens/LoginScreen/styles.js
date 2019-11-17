import React from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '@unimodules/core';
import { colors, fonts } from '../../commons';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width: 262,
    height: 47,
    color: colors.primaryColor,
    padding: 10
  },
  inputField: {
    marginBottom: 25
  },
  label: {
    color: colors.primaryColor,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginBottom: 10
  },
  labelCont: {
    flexDirection: 'row'
  },
  labelCont2: {
    justifyContent: 'center'
  },
  clickable: {
    color: colors.yellow,
    fontSize: 14,
    marginLeft: 4,
    top: 3
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  logoImage: {
    height: 86,
    width: 86,
    marginBottom: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.primaryColor,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  firstName: {
    fontSize: 40,
    color: colors.primaryColor,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    marginBottom: 30,
    top: -10
  }
});
