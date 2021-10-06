import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeInfoBar from './HomeInfoBar';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
		<Text>Entre pelo facebook: </Text>
        <StatusBar style="auto" />
        <Button title="Ok ok, go to selection" onPress={() => navigation.navigate('Selection') } />
        <HomeInfoBar navigation={navigation}/>
	  </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})