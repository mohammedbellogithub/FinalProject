import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faTasks, faUser} from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Todo from './Todo';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faHome}
              size={size}
              color={focused ? '#e67e22' : color} // Customize color if needed
            />
          ),
        }}
      />
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faTasks}
              size={size}
              color={focused ? '#e67e22' : color} // Customize color if needed
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesomeIcon
              icon={faUser}
              size={size}
              color={focused ? '#e67e22' : color} // Customize color if needed
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
