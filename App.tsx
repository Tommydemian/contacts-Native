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

import { MainNavigation } from './src/navigation/Main.navigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <MainNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
