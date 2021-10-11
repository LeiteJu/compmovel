import React, {useEffect, useState} from 'react'
// import * as Location from 'expo-location'
import { ActivityIndicator, StyleSheet, Text, View, Alert, TextComponent } from 'react-native';

const WEATHER_API_KEY = 'df73dd0d3afb5ede5eded44d0e3dfd6e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function GetWeather ({location}) {

    const [weather, setWeather] = useState(null)
    const [units, setUnit] = useState('metric')

    // const {lat, long} = {location}

    useEffect(()=> {
        load()
      },[])
      async function load () {

        setWeather(null)
        const {latitude, longitude} = location

        const weatherurl = `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`

        const response = await fetch(weatherurl)

        const result = await response.json()

        if (response.ok) {
            Alert.alert("Conseguimos :)");

            

            Alert.alert({result})

            // const {
            //   main : {main}, 
            //   weather: [details],
            //   name,
            // } = result
            // setWeather(result)
            // Alert.alert({result})
        }
        else {
            Alert.alert("Algo deu errado");
        }
        if (weather) {
          Alert.alert("Aaaaaaaaaaaa")
        }
        else {
          Alert.alert("hmmmmmmmr")
        }
        // const { main : {temp}} = weather
        return weather

      }
}

    