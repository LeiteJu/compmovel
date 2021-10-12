import React, {useState, useEffect}  from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {saveStorage, readStorage} from './storage'
import { FontAwesome5 } from '@expo/vector-icons';

import {Colors, white} from './styles' 

export const { lightgreen, pink, blue } = Colors;

export default function BookingScreen() {

    const [value, setvalue] = useState('');

    //useEffect(() => {
    //	load()
  	//}, [])


    async function load() {
        //setvalue(null);
        //alert("estou aqui 1")

        try {
            const result = {readStorage}
            //setvalue(readStorage)
            //alert("estou aqui 2")
            alert("Opaaaa " + {result})
            
        } catch (error) {
            alert(error)
            //alert("estou aqui 3")

        }

    }

    //<Button title="Go to Me Again!" onPress={() => navigation.navigate('Hotel') } />
    // <Button title="Reload component" onPress={load} />
    //<Text style = {{fontSize: 20, marginLeft: 10}}>Reservas aqui</Text>
    return (
        <View style={styles.BookingScreenContainer}>
            <View style={{flex: 1}} >
            <View style={{alignItems:'center', marginTop: '15%'}}>
            <FontAwesome5 name="pencil-alt" size={220} color="#FFF"/>
            </View>
            </View>
            <View style={styles.BookingContent}>
            <Text style={styles.BookingContentTitle}> Reservas realizadas: {value}</Text>
            <TouchableOpacity style={styles.buttonStyle} 
                    onPress={readStorage}>
                    <Text style={styles.buttonTextStyle}> Ver reserva </Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    BookingScreenContainer: {
        flex: 1,
        backgroundColor: lightgreen,
        paddingTop: '5%'
    },
    BookingScreenRow: {
        flexDirection: 'row' //default is column
        , alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    BookingContent: {
        backgroundColor: white,
        flex: 1,
        borderTopRightRadius: 80
        
    },
    BookingContentTitle:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15
    }
    ,
    BookingContentText:{

    },

    buttonStyle: {
        fontSize: 16,
        color: white,
        backgroundColor: pink,//blue,
        padding: 5,
        marginTop: 10,
        minWidth: 250,
        height: 60,
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 20

    },
    buttonTextStyle: {
        padding: 5,
        color: white,
        textAlign: 'center',
        fontSize: 22
    }

})