import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import SelectionScreen from './components/SelectionScreen';
import HotelScreen from './components/HotelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  	return (
    <NavigationContainer>
    	<Stack.Navigator initialRouteName="Home">
    		<Stack.Screen name="Home" options={{ title: 'Wooly Bubble' }} component={HomeScreen} />
        	<Stack.Screen name="Selection" component={SelectionScreen} />
			<Stack.Screen name="Hotel" options={{ title: 'Hotel' }} component={HotelScreen} />
      	</Stack.Navigator>
    </NavigationContainer>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
