import { StyleSheet } from 'react-native';
import { colors } from '../colors';
import { fonts } from '../fonts';

export default StyleSheet.create({
  bg_home: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 59,
    marginBottom: 20
  },
  bg_home_text: {
    color: colors.secondaryColor,
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: fonts.redHat
  },
  disabled: {
    opacity: 0.25
  }
});
