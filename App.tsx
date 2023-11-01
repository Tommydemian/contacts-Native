/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigation/Drawer.navigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

import { useAppSelector } from './src/hooks/useRedux';
import { AuthStackNavigator } from './src/navigation/Auth.navigator';

function App(): JSX.Element {
  const isLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? <AuthStackNavigator /> : <DrawerNavigator />}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
