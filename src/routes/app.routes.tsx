import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import New from '../pages/New';
import Profile from '../pages/Profile';
import GoodNews from '../pages/GoodNews';
import Tips from '../pages/Tips';
import Emergency from '../pages/Emergency';
import Login from '../pages/Login';
import Group from '../pages/Group';
import Mood from '../pages/Mood';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffff' },
      }}
      initialRouteName="Login"
    >
      <App.Screen name="Login" component={Login} />
      <App.Screen name="GoodNews" component={GoodNews} />
      <App.Screen name="Group" component={Group} />
      <App.Screen name="Tips" component={Tips} />
      <App.Screen name="Emergency" component={Emergency} />
      <App.Screen name="Profile" component={Profile} />
      <App.Screen name="New" component={New} />
      <App.Screen name="Mood" component={Mood} />
    </App.Navigator>
  );
};

export default AppRoutes;
