import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen
}, {
  initialRouteName: 'LoginScreen',
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
  // defaultNavigationOptions: {
  //   // header: props => <Header {...props}/>,
  //   headerStyle: {
  //     backgroundColor: '#333',
  //     color: 'white'
  //   },
  // },
});

export default createAppContainer(AppNavigator);
