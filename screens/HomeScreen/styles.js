import { Dimensions, StyleSheet } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';
import reactotron from 'reactotron-react-native';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
  },
  head: {
    backgroundColor: colors.secondaryColor,
    height: 450,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    shadowColor: colors.border,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 4
  },
  homeCard: {
    backgroundColor: colors.secondaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    paddingRight: 40,
    paddingLeft: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 20,
    shadowColor: colors.border,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 4
  },
  homeCardText: {
    fontFamily: fonts.redHatM,
    textTransform: 'uppercase',
    color: colors.primaryColor,
    fontSize: 12,
    letterSpacing: 1
  }
});
