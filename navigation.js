import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-stack-navigation'
import Login from './screens/LoginScreen';
const AppNavigator = createStackNavigator({
  Login
}, {
  initialRouteName: 'Login',
  // defaultNavigationOptions: {
  //   header: props => <Header {...props}/>,
  //   headerStyle: {
  //     backgroundColor: '#222F3E',
  //   },
  //   headerTintColor: '#4691CD',
  // },
});

export default createAppContainer(AppNavigator);
