import { DEVELOPMENT } from 'react-native-dotenv';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
import { store, persistor } from './app/store';
import Navigation from './navigation';
import { colors } from './app/commons';

import AddButton from './app/components/AddButton';

if (DEVELOPMENT) import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar hidden backgroundColor={colors.secondaryColor} barStyle="dark-content" />
        <Navigation />
        <AddButton />
      </PersistGate>
    </Provider>
  );
};
