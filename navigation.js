import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AllInvestments from './screens/AllInvestments';
import { colors, fonts } from './commons';

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen,
  AllInvestments
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.secondaryColor,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontFamily: fonts.redHat,
      textTransform: 'uppercase',
      fontSize: 14
    }
  },
});


export default createAppContainer(AppNavigator);
