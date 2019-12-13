import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import AllInvestments from './app/screens/AllInvestments';
import SingleInvestment from './app/screens/SingleInvestment';
import { colors, fonts } from './app/commons';
import HeaderBack from './app/components/Header/HeaderBack';

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen,
  AllInvestments,
  SingleInvestment
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.secondaryColor,
      borderBottomWidth: 0,
      elevation: 0,
      shadowColor: 'transparent'
    },
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontFamily: fonts.redHat,
      textTransform: 'uppercase',
      fontSize: 14,
      letterSpacing: 1,
    },
    headerLeft: <HeaderBack />
  },
});


export default createAppContainer(AppNavigator);
