import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  investmentCard: {
    height: 68,
    backgroundColor: colors.cardBack,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    borderRadius: 7,
    shadowColor: "#191919",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  investmentTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  investmentTitleText: {
    color: colors.textGrey,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.redHat,
    letterSpacing: 1
  },
  investmentDetails: {
    flex: 1,
    paddingRight: 20
  },
  roi: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  expectedReturnPercentage: {
    color: colors.cardRed,
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: fonts.redHat,
    marginLeft: 10
  },
  amountInvested: {
    color: colors.cardOrange,
    fontSize: 14,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  countDownTimer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  countDownTimerText: {
    color: colors.primaryColor,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 12,
  }
});
