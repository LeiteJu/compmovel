import React, {useEffect, useState}  from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// Styles
import { 
    Colors, 
    ExternalContainer,
    InnerContainer,
    Picture,
} from './styles'

import GetWeather from './GetWeather'

export const {pink, lightgreen, darkgreen, gray, blue, white, green} = Colors;

const WEATHER_API_KEY = 'df73dd0d3afb5ede5eded44d0e3dfd6e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

const location = {
    latitude: -9.069142712530162,
    longitude: -35.241828887364136,
}

const latitude= -9.069142712530162
const longitude= -35.241828887364136

export default function HotelScreen({navigation}) {

    // const weather = GetWeather({location})

    // const {
    //     main : {temp}, 
    //     weather: [details],
    //     name,
    // } = weather

    const weather = get_weather();

    return (
        <View style={styles.HotelScreen}>
            
            <Image style={styles.Pic} source={require('./images/hotel1.jpg')} />

            <InnerContainer>
                <Text>Localização: Alagoas, Brasil</Text>
                <Text>{latitude}</Text>
            </InnerContainer>
            <View>
                {weather}
            </View>
            <View>
                <Button title="Voltar" onPress={() => navigation.push('Selection') } />
            </View>
        </View>
    )
};

function get_weather () {

    // const [errormsg, setError] = useState(null)
    // const [curweather, setCurWeather] = useState(null)
    // const [units, setUnit] = useState('metric')

    const weather = null

    useEffect(()=> {
        load()
    },[])    

    async function load () {

        // setCurWeather(null)
        // setError(null)

        const weatherurl = `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
        const response = await fetch(weatherurl)
        const result = await response.json()

        if (response.ok) {
            // setCurWeather(result)
            const {
                main : {temp}, 
                weather: [details],
                name,
            } = result
            Alert.alert("Teoricamente tudo bem")
            Alert.alert({temp})
            return(
                {temp}
            )
        }
        else {
        Alert.alert(":(")
        }
    }

    // if (weather) {

    //     const {
    //         main : {temp}, 
    //         weather: [details],
    //         name,
    //     } = weather

    //     return (
    //     <View style={styles.container}>
    //         <StatusBar style="auto" />
    //         <View style={styles.main}>
    //         <Text>{temp}</Text>
    //         </View>
    //     </View>
    //     )

    // }
    // else {
    //     Alert.alert("Ue")
    // }

}

const styles = StyleSheet.create({
    HotelScreen: {
      flex: 1,
      backgroundColor: '#F9B6B6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Pic: {
        width: 300,
        height: 300,
        resizeMode: 'stretch',
    }
})