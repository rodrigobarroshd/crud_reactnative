import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
