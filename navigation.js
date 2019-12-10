import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Button, View, Image, Animated } from 'react-native';
import Buttons from './commons/Buttons';
import { colors } from './commons';
import menu from './assets/menu.png';
import profileImage from './assets/profileImage.jpg';

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen
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
    headerRight: () => (
      <Image
        source={profileImage}
        style={{
          height: 40,
          width: 40,
          resizeMode: 'contain',
          marginRight: 20,
          borderRadius: 20
        }}
      />
    ),
    headerLeft: () => (
      <Image source={menu} style={{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginLeft: 20
      }}/>
    ),
  },
});

export default createAppContainer(AppNavigator);
