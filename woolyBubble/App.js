import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import SelectionScreen from './components/SelectionScreen';
import HotelScreen from './components/HotelScreen';
import Hotel1Screen from './components/Hotel1Screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/*
function HomeTabs() {  
  return (   
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Selection" component={SelectionScreen} />      
    <Tab.Screen name="Hotel" component={HotelScreen} />    
  </Tab.Navigator>  
  );
} component={HomeTabs}
*/

export default function App() {
  	return (
    <NavigationContainer>
    	<Stack.Navigator initialRouteName="Home">
    		<Stack.Screen name="Home" options={{ title: 'Wooly Bubble', headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
			  <Stack.Screen name="Hotel" options={{ title: 'Hotel' }} component={HotelScreen} />
        <Stack.Screen name="Hotel1" options={{ title: 'Japaratinga Lounge Resort' }} component={Hotel1Screen} />
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
