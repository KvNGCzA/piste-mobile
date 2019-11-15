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
  },
  homeNavCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 32,
    backgroundColor: colors.cardBack,
    borderColor: colors.cardBack,
    borderWidth: 1,
    borderRadius: 7,
    height: 39,
  },
  homeNavBtn: {
    backgroundColor: colors.cardBack,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 7,
  },
  homeNavText: {
    fontSize: 12,
    color: colors.textGrey,
    fontFamily: fonts.redHat,
    textTransform: 'uppercase',
  },
  active: {
    borderColor: '#323232',
    borderWidth: 1,
  }
});
