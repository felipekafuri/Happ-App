import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../pages/Profile';
import GoodNews from '../pages/GoodNews';
import Tips from '../pages/Tips';
import Emergency from '../pages/Emergency';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (

    <Tab.Navigator
      initialRouteName="GoodNews"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="GoodNews"
        component={GoodNews}
        options={{
          tabBarLabel: 'Home',
          
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
         //tabBarIcon
        }}
      />
      <Tab.Screen
        name="Tips"
        component={Tips}
        options={{
          tabBarLabel: 'Tips',
          
        }}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{
          tabBarLabel: 'Emergency',
          
        }}
      />
      
    </Tab.Navigator>
  );
};

export default AppRoutes;


