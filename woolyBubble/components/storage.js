import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, TextComponent, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeItemStorage = async(key, value) => {
    try {
        alert(`bye`)
        await AsyncStorage.removeItem(key);
        
    } catch (error) {
        alert(`Erro erro`)
    }
}

export const setItemStorage = async(key, value) => {
    try {
        // alert(`hello`)
        await AsyncStorage.setItem(key, JSON.stringify(value));
        
    } catch (error) {
        alert(`Erro erro`)
    }
}

export const getItemStorage = async(key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null)
        {
            // we have data
            
            //alert(value);
            return value;
        } else {
            alert(`Erro erro`)
        }
        
    } catch (error) {
        alert(`Erro erro`)
    }
}

export const saveStorage = (value) => {
    setItemStorage("Reserva", value) // {hotel: "Japaratinga", temp: "24"}

}

export const readStorage = () => {
    getItemStorage("Reserva").then(result => {
        let jsonObject = JSON.parse(result)
        Alert.alert("Reserva confirmada","Hotel: "+jsonObject.hotel + "\nTemperatura: "+ jsonObject.temp + "C\nData da reserva: "+ jsonObject.date)
        return JSON.stringify(jsonObject.hotel)
    })
}