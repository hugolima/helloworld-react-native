import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/Home';
import { DetailsScreen } from './components/Details';
import { AppStateProvider } from './context/AppContext';
import ContextConfig from './context/config';

const Stack = createNativeStackNavigator();
const initialState = ContextConfig.initialState;
const reducers = ContextConfig.reducers;

export default function App() {
  return (
    <NavigationContainer>
      <AppStateProvider initialState={initialState} reducer={reducers}>
        <Stack.Navigator>
          <Stack.Screen name='MyBank' component={HomeScreen} />
          <Stack.Screen name='Detalhes' component={DetailsScreen} />
        </Stack.Navigator>
      </AppStateProvider>
    </NavigationContainer>
  );
}
