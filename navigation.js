import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import reactotron from 'reactotron-react-native';


// const result = {};
// const getInitialRoute = async () => {
//   const storage = await AsyncStorage.getItem('persist:root')
//   const { isLoggedIn } = JSON.parse(JSON.parse(storage).global);
//   result.result = isLoggedIn ? 'HomeScreen' : 'LoginScreen';
// }
// reactotron.log(result);

const AppNavigator = createStackNavigator({
  LoginScreen,
  HomeScreen
}, {
  initialRouteName: 'HomeScreen',
  // defaultNavigationOptions: {
  //   // header: props => <Header {...props}/>,
  //   headerStyle: {
  //     backgroundColor: '#333',
  //     color: 'white'
  //   },
  // },
});

export default createAppContainer(AppNavigator);
