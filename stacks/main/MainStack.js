import React from 'react';
import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsScreen, MainScreen, TeamScreen } from '.';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  newsScreen: {
    backgroundColor: '#ad402e',
    color: 'white',
    maxHeight: 120,
  }
})

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
      screenOptions={{
        presentation: 'card'
      }}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Main Menu'}}
        />
        <Stack.Screen name="Team" 
        options={{ title: 'Team Info'}}
        component={TeamScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainStack;
