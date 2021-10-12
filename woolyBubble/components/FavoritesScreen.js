import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, TextComponent } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { blue, white } from './styles';

const storeDataString = async (value) => {  
    try {    
        await AsyncStorage.setItem('@storage_Key', value)  
    } catch (e) {    
        // saving error  
        alert(`Erro erro`)
    }
}

const storeDataObjefct = async (value) => {
    try {    
        const jsonValue = JSON.stringify(value)    
        await AsyncStorage.setItem('@storage_Key', jsonValue)  
    } catch (e) {    
        // saving error  
        alert(`Erro erro`)
    }
}    


const getDataString = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }



const getDataObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  

export default function FavoritesScreen() {
    const [textInputValue, settextInputValue] = useState('');
    const [value, setvalue] = useState('');

    const saveValue = () => {
        if (textInputValue){
            AsyncStorage.setItem('kekey', textInputValue);
            settextInputValue('');
            alert('Data Saved');

        } else {
            alert('Ups');
        }
    }

    const getValue = () => {
        AsyncStorage.getItem('kekey')
        .then((value) => {
            setvalue(value);
        })
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>New Screen!</Text>
                <Button title="Go to Me Again!" onPress={() => navigation.push('Hotel') } />
                <Button title="Go back button" onPress={() => navigation.goBack() } />
                <TextInput
                    placeholder='Enter your favorite'
                    value={textInputValue}
                    onChangeText={(data) => settextInputValue(data)}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.buttonStyle} 
                    onPress={saveValue}>
                    <Text style={styles.buttonTextStyle}> Save </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} 
                    onPress={getValue}>
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