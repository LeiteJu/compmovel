import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



export default function SelectionScreen({navigation}) {
    return (
        <View style={styles.SelectionScreen}>
		<Text>Details Screen</Text>
        <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel') } />
        <Button title="Go back button" onPress={() => navigation.goBack() } />
	  </View>
    )
}


const styles = StyleSheet.create({
    SelectionScreen: {
      flex: 1,
      backgroundColor: '#fcdcdb',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})