import { Dimensions, StyleSheet } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';
import reactotron from 'reactotron-react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  label: {
    color: colors.textGrey,
    fontFamily: fonts.redHatM,
    fontSize: 14,
    marginBottom: 5,
    // letterSpacing: 1,
    textTransform: 'capitalize'
  },
  value: {
    color: colors.primaryColor,
    fontFamily: fonts.redHatM,
    fontSize: 16,
    // letterSpacing: 1,
    textTransform: 'capitalize',
  },
  roi: {
    fontSize: 12,
    color: colors.warning,
    left: 5,
    fontFamily: fonts.redHatM,
  },
  textCont: {
    alignItems: 'center',
  },
  valueCont: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20
  },
  actionButton: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
    width: width/3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  actionButtonText: {
    fontFamily: fonts.redHatM,
    fontSize: 16,
    color: colors.primaryColor,
    marginLeft: 5 
  },
  actionButtonImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  }
});
