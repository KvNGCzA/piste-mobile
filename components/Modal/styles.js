import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../commons';
import { Platform } from '@unimodules/core';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    borderRadius: 7,
    backgroundColor: colors.cardBack,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 30,
    width: '70%'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
