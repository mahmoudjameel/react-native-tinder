import React from 'react';
import StackNavigator from './StackNavigator';
//import { LogBox } from 'react-native';
//LogBox.ignoreAllLogs(); // Ignore log notification by messages
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
         {/* Passes down the cool auth stuff to children.. */}
        <StackNavigator />
      </AuthProvider>
     </NavigationContainer>
  );
}

