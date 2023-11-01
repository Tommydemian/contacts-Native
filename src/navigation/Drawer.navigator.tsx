import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigator } from './Home.navigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};
