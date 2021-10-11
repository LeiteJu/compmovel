import React, {useEffect, useState} from 'react'
// import * as Location from 'expo-location'
import { ActivityIndicator, StyleSheet, Text, View, Alert, TextComponent } from 'react-native';

const WEATHER_API_KEY = 'df73dd0d3afb5ede5eded44d0e3dfd6e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

function Weatherinfo({curweather}) {
  const {
      main : {temp}, 
      weather: [details],
      name,
  } = curweather
  const {icon, main, desc} = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
      <View style={styles.weatherInfo}>
          <Text>{name}</Text>
          <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
          <Text style={styles.textPrimary}>{temp}</Text>
          <Text style={styles.weatherdesc}>{desc}</Text>
          <Text style={styles.textSecondary}>{main}</Text>
      </View>
  )
}


export default function GetWeather ({location}) {

    const [errormsg, setError] = useState(null)
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

            const { main : {temp} } = result

            Alert.alert({main})
            // <Text>nnn</Text>
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
        return result

      }
}

    