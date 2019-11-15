import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../commons';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
  },
  backImage: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
  },
  content: {
    marginTop: 135,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20
  },
  overviewCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  overviewValue: {
    fontSize: 32,
    fontFamily: fonts.redHat,
    fontWeight: '500',
    color: colors.textGrey,
    textAlign: 'right',
    letterSpacing: 1,
  },
  currency: {
    fontSize: 17,
    color: colors.textGrey,
    top: 6,
    fontFamily: fonts.redHat,
    marginRight: 2,
    fontWeight: '500',
  },
  label: {
    color: colors.primaryColor,
    fontFamily: fonts.redHat,
    fontSize: 14,
    top: -6,
    textAlign: 'right'
  }
});
