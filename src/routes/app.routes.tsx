import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FaHome } from 'react-icons/fa';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import GoodNews from '../pages/GoodNews';
import Tips from '../pages/Tips';
import Emergency from '../pages/Emergency';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffff' },
      }}
      initialRouteName="Home"
    >
      <App.Screen name="GoodNews" component={GoodNews} />
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Tips" component={Tips} />
      <App.Screen name="Emergency" component={Emergency} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppRoutes;
