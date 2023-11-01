import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// components
import { ContactDetail } from '../components/ContactDetail';
import { Contacts } from '../components/Contacts';
import { CreateContact } from '../components/CreateContact';
import { Settings } from '../components/Settings';

type HomeStackParams = {
  ContactDetails: React.FC;
  Contacts: React.FC;
  CreateContact: React.FC;
  Settings: React.FC;
};

const HomeStack = createStackNavigator<HomeStackParams>();

export const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="ContactDetails" component={ContactDetail} />
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="CreateContact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
