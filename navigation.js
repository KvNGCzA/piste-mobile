import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';

const AppNavigator = createStackNavigator({
  LoginScreen
}, {
  initialRouteName: 'LoginScreen',
  // defaultNavigationOptions: {
  //   // header: props => <Header {...props}/>,
  //   headerStyle: {
  //     backgroundColor: '#333',
  //     color: 'white'
  //   },
  // },
});

export default createAppContainer(AppNavigator);
