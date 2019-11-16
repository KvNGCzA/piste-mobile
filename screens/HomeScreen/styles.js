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
    height: 260
  },
  imageStyle: {
    resizeMode: 'cover',
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
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
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
    marginTop: 32,
    backgroundColor: colors.cardBack,
    borderColor: colors.cardBack,
    borderWidth: 1,
    borderRadius: 7,
    height: 39,
    marginBottom: 3,
    marginLeft: 20,
    marginRight: 20,
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
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    borderRadius: 7,
    marginBottom: 10,
  },
  tabParent: {
    width,
    paddingHorizontal: 20,
  },
  overviewParent: {
    padding: 20,
    paddingTop: 10,
    flex: 1,
  },
  overviewContainer: {
    backgroundColor: colors.cardBack,
    borderRadius: 7,
    height: '80%'
  },
  overviewSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overviewTitle: {
    color: colors.textGrey,
    textTransform: 'capitalize',
    fontFamily: fonts.redHat,
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 6
  },
  overviewContent: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 4
  },
  text: {
    fontFamily: fonts.redHat,
    fontSize: 14,
    letterSpacing: 1
  },
  overviewRoi: {
    color: colors.cardRed,
    fontSize: 12 
  },
  overviewPrinciple: {
    color: colors.primaryColor,
    marginLeft: 10 ,
    fontFamily: fonts.redHat,
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  overviewCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overviewCategoryName: {
    color: colors.cardOrange,
    textTransform: 'capitalize',
  }
});
