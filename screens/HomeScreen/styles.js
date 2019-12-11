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
    height: 350,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    ...colors.defaultShadow
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
    ...colors.defaultShadow
  },
  homeCardText: {
    fontFamily: fonts.redHatM,
    textTransform: 'uppercase',
    color: colors.primaryColor,
    fontSize: 12,
    letterSpacing: 1
  }
});
