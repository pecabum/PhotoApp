import * as React from 'react';
import store from './src/store';
import HomeScreen from './src/screens/home';
import PhotoDetails from './src/screens/details';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DETAILS_SCREEN, HOME_SCREEN } from './src/screens';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={HOME_SCREEN}
            options={{ title: 'Gallery' }}
            component={HomeScreen}
          />
          <Stack.Screen
            name={DETAILS_SCREEN}
            options={{ title: 'Image Details' }}
            component={PhotoDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
