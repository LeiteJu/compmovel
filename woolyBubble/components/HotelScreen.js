import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function HotelScreen({navigation}) {
    return (
        <View style={styles.HotelScreen}>
		    <Text>Marvelous hotel page</Text>
            <Button title="Go to Me Again!" onPress={() => navigation.push('Hotel') } />
            <Button title="Go back button" onPress={() => navigation.goBack() } />
	    </View>
    )
};


const styles = StyleSheet.create({
    HotelScreen: {
      flex: 1,
      backgroundColor: '#d5f2e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})