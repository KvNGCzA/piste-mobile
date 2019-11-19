import { StyleSheet } from 'react-native';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { Platform } from '@unimodules/core';

export default StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    width: '48%'
  },
  bg_home: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 59,
    marginBottom: 20
  },
  bg_home_text: {
    color: colors.secondaryColor,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: fonts.redHat
  },
  disabled: {
    opacity: 0.25
  }
});
