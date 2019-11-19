import { Dimensions, StyleSheet } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';
import reactotron from 'reactotron-react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
  },
  backImage: {
    width: '100%',
    position: 'absolute',
    top:0,
    height: 190
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 87,
  },
  menuButton: {
    width: 84,
    height: 84,
    right: -2
  },
  overviewCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  overviewValue: {
    fontSize: 32,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    textAlign: 'right',
    letterSpacing: 2,
    color: colors.primaryColor,
    fontWeight: 'bold',
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
    fontSize: 10,
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  homeNavCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: colors.cardBack,
    borderColor: colors.cardBack,
    borderWidth: 1,
    borderRadius: 7,
    height: 39,
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "#191919",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
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
    letterSpacing: 1
  },
  active: {
    borderColor: '#323232',
    borderWidth: 1,
  },
  body: {
    flex: 1,
  },
  investmentInfoParent: {
    marginBottom: 35
  },
  investmentInfoTitle: {
    color: colors.textGrey,
    fontFamily: fonts.redHat,
    textTransform: 'capitalize',
    fontSize: 14,
  },
  investmentInfoDetail: {
    color: colors.cardOrange,
    fontFamily: fonts.redHat,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 17,
    fontSize: 16,
    letterSpacing: 1
  }
});
