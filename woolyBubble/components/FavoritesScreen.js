import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, TextComponent } from 'react-native'
import { blue, white } from './styles';
import {saveStorage, readStorage} from './storage'


export default function FavoritesScreen() {
    const [textInputValue, settextInputValue] = useState(''); // temperatura
    const [value, setvalue] = useState(valuee);

    const NomeHotel = 'Japarainga Lounge'
    const data = '12/10/2021'
    const temp = '23.4'
    
    const valuee = { hotel: 'Japarainga Lounge'
    , temp: '23.4'
    }

    const [textValue, settextValue] = useState(valuee); // temperatura 

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>New Screen!</Text>
                <Button title="Go to Me Again!" onPress={() => navigation.push('Hotel') } />
                <Button title="Go back button" onPress={() => navigation.goBack() } />
                <Text> {NomeHotel} </Text>
                <TextInput
                    placeholder='Enter your favorite'
                    value={textInputValue}
                    // onChangeText={(data) => settextInputValue(data)}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.buttonStyle} 
                    //</View>onPress={saveStorage(valuee)}
                    > 
                    <Text style={styles.buttonTextStyle}> Save </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} 
                    onPress={readStorage}>
                    <Text style={styles.buttonTextStyle}> Get Value </Text>
                </TouchableOpacity>
                <Text>{value}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#60C4FC'
    },
    buttonStyle: {
        fontSize: 16,
        color: white,
        backgroundColor: blue,
        padding: 5,
        marginTop: 10,
        minWidth: 250,
        height: 60,
        justifyContent: 'center'

    },
    buttonTextStyle: {
        padding: 5,
        color: white,
        textAlign: 'center',
        fontSize: 22
    }


})