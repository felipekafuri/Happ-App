import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import Routes from './routes/app.routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>

  );
};

export default App;
