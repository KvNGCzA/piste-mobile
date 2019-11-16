import { Dimensions, StyleSheet } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';
import reactotron from 'reactotron-react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  tabs: {
    flexDirection: 'row',
  },
  tabParent: {
    width,
    paddingHorizontal: 20,
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
  overviewCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overviewCategoryName: {
    color: colors.cardOrange,
    textTransform: 'capitalize',
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
});
