import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AllInvestments from './screens/AllInvestments';
import SingleInvestment from './screens/SingleInvestment';
import { colors, fonts } from './commons';
import HeaderBack from './components/Header/HeaderBack';

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
    },
    headerTintColor: colors.primaryColor,
    headerTitleStyle: {
      fontFamily: fonts.redHat,
      textTransform: 'uppercase',
      fontSize: 14,
      letterSpacing: 1
    },
    headerLeft: <HeaderBack />
  },
});


export default createAppContainer(AppNavigator);
