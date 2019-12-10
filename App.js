import { DEVELOPMENT } from 'react-native-dotenv';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Navigation from './navigation';
import { colors } from './commons';

import SplashScreen from 'react-native-splash-screen'

if (DEVELOPMENT) import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <StatusBar backgroundColor={colors.secondaryColor} barStyle="dark-content" />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};
