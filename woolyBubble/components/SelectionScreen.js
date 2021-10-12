import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const lightgray = '#F0F0F0';
const mediumgray = '#D6D6D6';
const darkgrey = '#707070';
const darkgreen = '#10584B';
const darkred = '#A60000';


export default function SelectionScreen({navigation}) {
    return (
        <View style={styles.SelectionScreen}>
            
        <Text> Olá, pessoa! </Text>
		<Text style={{flex: 1}}>Hotéis mais amados:</Text>

        <View style={styles.SelectionScreenColumnHotel}>
            <View style={styles.SelectionScreenHotel}>
                <Text style = {styles.SelectionScreenHotelTitle}> Japaratinga Lounge Resort</Text>
                <Image source={require('../assets/images/jurupatinga.jpg')} style={styles.SelectionScreenHotelImage} />
                <View style={styles.SelectionScreenHotelRowS}>
                    <View style={styles.SelectionScreenHotelRow}>
                        <TouchableOpacity
                        // style={{backgroundColor: "red"}}
                        onPress={() => alert("Event catched!")} >
                            <FontAwesome name="heart" size={28} color="darkred" />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.SelectionScreenHotelRow}>
                        <Text style = {styles.SelectionScreenHotelAddress}> Japaratinga - AL </Text>
                        <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel') } />
                    </View>
                </View>
            </View>

            <View style={styles.SelectionScreenHotel}>
                <Text> Adicionar imagem e link para hotel 2 </Text>
                <View style={styles.SelectionScreenHotelRow}>
                    <Text> Endereco do hotel 2 </Text>
                    <Button title="Go to hotel" onPress={() => navigation.navigate('Hotel') } />
                </View>
            </View>

            <View style={styles.SelectionScreenHotel}>
                <Text> Adicionar imagem e link para hotel 3 </Text>
                <View style={styles.SelectionScreenHotelRow}>
                    <Text> Endereco do hotel 3 </Text>
                    <Button title="Go back button" onPress={() => navigation.goBack() } />
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
        borderColor: mediumgray,
        backgroundColor: lightgray,
        padding: 10,
        width: '100%'
        
    },
    SelectionScreenHotelRow: {
        flexDirection: 'row', //default is column
        alignItems: 'center',
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
    }
  
})