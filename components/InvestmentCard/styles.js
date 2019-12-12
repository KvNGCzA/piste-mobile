import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  investmentCard: {
    height: 80,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    borderRadius: 7,
    borderColor: colors.border,
    borderWidth: 1,
    ...colors.defaultShadow
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
    color: colors.warning,
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: fonts.redHatM,
    marginLeft: 10
  },
  amountInvested: {
    color: colors.primaryColor,
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
    color: colors.textGrey,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 12,
  }
});
