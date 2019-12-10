import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '..';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  inputField: {
    marginBottom: 25
  },
  labelCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: colors.primaryColor,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
  },
  clickable: {
    color: colors.warning,
    fontSize: 14,
    marginLeft: 4,
  },
  input: {
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width: 262,
    height: 47,
    color: colors.primaryColor,
    padding: 10
  }
});
