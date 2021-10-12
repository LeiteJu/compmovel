import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons';

const lightgray = '#F0F0F0';
const mediumgray = '#D6D6D6';
const darkgrey = '#707070';
const darkgreen = '#10584B';
const darkred = '#A60000';

import { 
    SelectionScreenHotel,
    Hotel_Title,
    Hotel_image,
    Resume, 
    Welcome_Text,
    Welcome_page,
    SelectionScreenColumnHotel,
    GoTo,
    ButtonText,
    Book_Button} from './styles'

import {Colors} from './styles' 

export const { lightgreen, pink } = Colors;
/*
<TouchableOpacity
                            onPress={() => navigation.navigate('Favorites')} >
                                <FontAwesome name="heart" size={28} color="darkred" />
                            </TouchableOpacity>
*/
export default function SelectionScreen({navigation}) {
    return (
        <View style={styles.SelectionScreen}>
        
        {/* <Text> Olá, pessoa! </Text>
		<Text >Hotéis mais amados:</Text> */}
        <Welcome_page>
            
            <Welcome_Text>Nossos hoteis mais amados:</Welcome_Text>
           
        </Welcome_page>
        <SelectionScreenColumnHotel>
            {/* <Welcome_Text style={{fontWeight: 'bold', marginTop: '3%'}}>Nossos hoteis mais amados:</Welcome_Text> */}
            <SelectionScreenHotel>
                <Hotel_Title>Japaratinga Lounge Resort</Hotel_Title>
                <Hotel_image source={require('./images/hotel1.jpg')} />
                <View style={styles.SelectionScreenHotelRowS}>
                        <View style={styles.SelectionScreenHotelRow}>
                            <TouchableOpacity
                            onPress={() => Alert.alert("Favoritos","Ainda em construção")} >
                                <FontAwesome name="heart" size={28} color="darkred" />
                            </TouchableOpacity>
                            <Text style = {styles.SelectionScreenHotelAddress}> Japaratinga - AL </Text>
                            <GoTo onPress={() => navigation.navigate('Hotel1')}>
                                <ButtonText>Conhecer</ButtonText>
                            </GoTo>
                    </View>
                </View>
            </SelectionScreenHotel>
            <SelectionScreenHotel>
                <Hotel_Title>Palácio Tangará</Hotel_Title>
                <Hotel_image source={require('./images/hotel2.jpg')} />
                <View style={styles.SelectionScreenHotelRowS}>
                        <View style={styles.SelectionScreenHotelRow}>
                            <TouchableOpacity
                            onPress={() => Alert.alert("Favoritos","Ainda em construção")} >
                                <FontAwesome name="heart" size={28} color="darkred" />
                            </TouchableOpacity>
                            <Text style = {styles.SelectionScreenHotelAddress}> São Paulo - SP </Text>
                            <GoTo onPress={() => navigation.navigate('Hotel2')}>
                                <ButtonText>Conhecer</ButtonText>
                            </GoTo>
                    </View>
                </View>
            </SelectionScreenHotel>
            <SelectionScreenHotel>
            <Hotel_Title>ModeVie Boutique Hotel</Hotel_Title>
                <Hotel_image source={require('./images/hotel3.jpg')} />
                <View style={styles.SelectionScreenHotelRowS}>
                        <View style={styles.SelectionScreenHotelRow}>
                            <TouchableOpacity
                            onPress={() => Alert.alert("Favoritos","Ainda em construção")} >
                                <FontAwesome name="heart" size={28} color="darkred" />
                            </TouchableOpacity>
                            <Text style = {styles.SelectionScreenHotelAddress}> Gramado - RS </Text>
                            <GoTo onPress={() => navigation.navigate('Hotel3')}>
                                <ButtonText>Conhecer</ButtonText>
                            </GoTo>
                    </View>
                </View>
            </SelectionScreenHotel>
            
            
        </SelectionScreenColumnHotel>
	  </View>
    )
}

/*
<View style={styles.SelectionScreenHotelRowS}>
                <View style={styles.SelectionScreenHotelRow}>
                    <Book_Button onPress={() => navigation.navigate('Booking')}>
                        <ButtonText>Suas reservas</ButtonText>
                    </Book_Button>
                </View>
            </View>

<View style={styles.SelectionScreenHotelRowS}>
                <View style={styles.SelectionScreenHotelRow}>
                    <Book_Button onPress={() => navigation.navigate('Booking')}>
                        <ButtonText>Suas reservas</ButtonText>
                    </Book_Button>
                </View>
            </View>
*/

const styles = StyleSheet.create({
    go_button: {
        backgroundColor:`${lightgreen}`
    },
    SelectionScreen: {
      flex: 1,
      backgroundColor: pink,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
      
    },
    SelectionScreenColumnHotel: {
        flex: 4,
        alignItems: 'stretch',
        width: '100%',
        // justifyContent: 'space-around',
        justifyContent: 'center',
        // backgroundColor: '#FAFAFA', 
        backgroundColor: lightgreen, 
        
        
    },
    SelectionScreenHotel: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: mediumgray,
        backgroundColor: lightgray,
        padding: 10,
        width: '100%'
        
    },
    SelectionScreenHotelRow: {
        flexDirection: 'row' //default is column
        , alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10
    },
    SelectionScreenHotelRowS: {
        flexDirection: 'row' //default is column
        , alignItems: 'center',
        justifyContent: 'space-between', 
    },
    SelectionScreenHotelTitle: {
        fontSize: 18,
        marginBottom: 10,
        letterSpacing: 1,
        //fontWeight: 'bold',
        //textAlign: 'center',
        color: darkgreen
    },
    SelectionScreenHotelImage: {
        width: '100%',
        height: 120,
        alignSelf: 'center',
        marginBottom: 15
    },
    SelectionScreenHotelAddress : {
        // fontSize: 18,
        marginRight: 10,
        letterSpacing: 1,
        //fontWeight: 'bold',
        //textAlign: 'center',
        color: darkgrey
    },
})