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
  inputField: {
    marginBottom: 25
  },
  input: {
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width: 262,
    height: 47,
    color: colors.primaryColor,
    padding: 10
  },
  label: {
    color: colors.primaryColor,
    fontFamily: fonts.redHatM,
    fontSize: 16,
  },
  labelCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelCont2: {
    justifyContent: 'center'
  },
  clickable: {
    color: colors.warning,
    fontSize: 14,
    marginLeft: 4,
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
    fontFamily: fonts.redHatM,
  },
  firstName: {
    fontSize: 40,
    color: colors.primaryColor,
    fontFamily: fonts.redHatM,
    marginBottom: 30,
    top: -10
  }
});
