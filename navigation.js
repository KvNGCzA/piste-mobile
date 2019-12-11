import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AllInvestments from './screens/AllInvestments';
import { colors } from './commons';

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen,
  AllInvestments
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    // gesturesEnabled: false
    // header: props => <Header {...props}/>,
    headerStyle: {
      backgroundColor: colors.secondaryColor,
      color: 'white',
      borderBottomWidth: 0,
    },
  },
});


export default createAppContainer(AppNavigator);
