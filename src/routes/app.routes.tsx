import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Profile from '../pages/Profile';
import GoodNews from '../pages/GoodNews';
import Tips from '../pages/Tips';
import Emergency from '../pages/Emergency';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (

    <Tab.Navigator>       
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="GoodNews" component={GoodNews}/>
            <Tab.Screen name="Tips" component={Tips}/>
            <Tab.Screen name="Emergency" component={Emergency}/>
    </Tab.Navigator>
        
    /*
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#356f' },
      }}
      initialRouteName="GoodNews"
    >
      <App.Screen name="GoodNews" component={GoodNews} />
    </App.Navigator>*/
  );
};

export default AppRoutes;
