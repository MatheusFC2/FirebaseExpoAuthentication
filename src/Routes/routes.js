import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Signin from '../pages/Signin';

export default function Routes() {

    const Stack = createNativeStackNavigator();
    
    return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}