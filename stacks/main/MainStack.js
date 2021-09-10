import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, TeamScreen } from '.';

const Stack = createNativeStackNavigator();

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
