import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



export default function SelectionScreen({navigation}) {
    return (
        <View style={styles.SelectionScreen}>
            
        <Text> Olá, pessoa! </Text>
		<Text style={{flex: 1}}>Hotéis mais amados:</Text>

        <View style={styles.SelectionScreenColumnHotel}>
            <View style={styles.SelectionScreenHotel}>
                <Text> Adicionar imagem e link para hotel 1 </Text>
                <View style={styles.SelectionScreenHotelRow}>
                    <Text> Endereco do hotel 1 </Text>
                    <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel1') } />
                </View>
            </View>
            <View style={styles.SelectionScreenHotel}>
                <Text> Adicionar imagem e link para hotel 2 </Text>
                <View style={styles.SelectionScreenHotelRow}>
                    <Text> Endereco do hotel 2 </Text>
                    <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel2') } />
                </View>
            </View>
            <View style={styles.SelectionScreenHotel}>
                <Text> Adicionar imagem e link para hotel 3 </Text>
                <View style={styles.SelectionScreenHotelRow}>
                    <Text> Endereco do hotel 3 </Text>
                    <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel3') } />
                </View>
            </View>
        </View>
	  </View>
    )
}


const styles = StyleSheet.create({
    SelectionScreen: {
      flex: 1,
      backgroundColor: '#fcdcdb',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
      
    },
    SelectionScreenColumnHotel: {
        flex: 4,
        alignItems: 'stretch',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#FAFAFA', 
        
        
        
    },
    SelectionScreenHotel: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#6E59FF",
        padding: 10,
        width: '100%'
        
    },
    SelectionScreenHotelRow: {
        flexDirection: 'row' //default is column
        , alignItems: 'center',
        justifyContent: 'flex-end',
        
    },
  
})