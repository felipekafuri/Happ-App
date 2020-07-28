import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GoodNews from '../pages/GoodNews';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#356f' },
      }}
      initialRouteName="GoodNews"
    >
      <App.Screen name="GoodNews" component={GoodNews} />
    </App.Navigator>
  );
};

export default AppRoutes;
