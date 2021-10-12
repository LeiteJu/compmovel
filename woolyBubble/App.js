import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/HomeScreen';
import SelectionScreen from './components/SelectionScreen';
import HotelScreen from './components/HotelScreen';
import Hotel1Screen from './components/Hotel1Screen';
import Hotel2Screen from './components/Hotel2Screen';
import Hotel3Screen from './components/Hotel3Screen';
import FavoritesScreen from './components/FavoritesScreen';
import BookingScreen from './components/BookingScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {  
   return (   
   <Tab.Navigator>
     <Tab.Screen name="Selection" component={SelectionScreen} options={{ title: "Catálogo de hotéis",
      tabBarLabel: 'Hotéis',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bed" color={color} size={size} />
      ),
    }}/>
     <Tab.Screen name="Booking" component={BookingScreen} options={{ title:"Reservas",
      tabBarLabel: 'Reservas',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bookmarks" color={color} size={size} />
      ),
    }}/>      
     
   </Tab.Navigator>  
   );
 }//  component={HomeTabs}

// favorites tab
{/* <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
      tabBarLabel: 'Favoritos',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="heart" color={color} size={size} />
      ),
    }}/>   */}      

export default function App() {
  	return (
    <NavigationContainer>
    	<Stack.Navigator initialRouteName="Home">
    		<Stack.Screen name="Home" options={{ title: 'Wooly Bubble', headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Selectionn" options={{headerShown: false }} component={HomeTabs} />
			  <Stack.Screen name="Hotel" options={{ title: 'Hotel' }} component={HotelScreen} />
        <Stack.Screen name="Hotel1" options={{ title: 'Japaratinga Lounge Resort' }} component={Hotel1Screen} />
        <Stack.Screen name="Hotel2" options={{ title: 'Palácio Tangará' }} component={Hotel2Screen} />
        <Stack.Screen name="Hotel3" options={{ title: 'ModeVie Boutique Hotel' }} component={Hotel3Screen} />
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
