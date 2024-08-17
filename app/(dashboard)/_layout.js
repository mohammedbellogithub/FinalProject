import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Todo from './Todo';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
