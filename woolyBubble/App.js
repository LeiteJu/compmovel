import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen';
import SelectionScreen from './components/SelectionScreen';
import HotelScreen from './components/HotelScreen';
import FavoritesScreen from './components/FavoritesScreen';
import BookingScreen from './components/BookingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {  
  return (   
  <Tab.Navigator>
    <Tab.Screen name="Selection" component={SelectionScreen} />
    <Tab.Screen name="Booking" component={BookingScreen} />      
    <Tab.Screen name="Favorites" component={FavoritesScreen} />    
  </Tab.Navigator>  
  );
} component={HomeTabs}


export default function App() {
  	return (
    <NavigationContainer>
    	<Stack.Navigator initialRouteName="Home">
    		<Stack.Screen name="Home" options={{ title: 'Wooly Bubble', headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Selectionn" options={{headerShown: false }} component={HomeTabs} />
			  <Stack.Screen name="Hotel" options={{ title: 'Hotel' }} component={HotelScreen} />
        <Stack.Screen name="Favorites" options={{ title: 'Favoritos', headerShown: false }} component={FavoritesScreen} />
        <Stack.Screen name="Booking" options={{ title: 'Booking', headerShown: false}} component={BookingScreen} />
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
