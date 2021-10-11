import { StatusBar }  from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';

const WEATHER_API_KEY = '07fa2b46fcbf7ac2c2bd778c41ed952a'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

const out_13 = 1634144400;
const out_14 = 1634230800;
const out_15 = 1634317200;

// Styles
import { 
  Colors, 
  ExternalContainer,
  InnerContainer,
  Picture,
  Bottom,
  Box,
  Back,
  Title,
  Resume,
  Back_Button,
  ButtonText,
  Choose_Button,
  Line
} from './styles'

export default function Hotel1Screen({navigation}) {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitSystem] = useState('metric')  // use imperial for fahrenheit

  useEffect(() => {
    load()
  }, [unitsSystem])  // everytime the unitSytem variable change, the api call will be made

  async function load() {
    setCurrentWeather(null)
    setErrorMessage(null)

    try {
          
      const latitude= -9.069142712530162
      const longitude= -35.241828887364136

      const weather_url = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weather_url)
      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }
    
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  
  if(currentWeather){

    const {
      main : {temp}, 
      weather: [details], 
      name
    } = currentWeather

    const {icon} = details

    const ICONURL = `http://openweathermap.org/img/w/${icon}.png`

    return (
      <View>
        <Back>
          <Picture source={require('./images/hotel1.jpg')}/>
          <Bottom>
            <Title>Japaratinga Lounge Resort</Title>
            <Resume>Maravilhoso resort localizado em Alagoas, próximo a algumas das melhores praias do país</Resume>
            <Text style={{fontWeight:'bold'}}>Localização: Alagoas, Brasil</Text>
            <Box>
              <Text style={{fontWeight:'bold'}}> Temperatura atual: {temp}ºC</Text>
              <Image style={styles.icon} source={{uri:ICONURL}} />
            </Box>
            <View style={{flexDirection:'row'}}>
              <Back_Button onPress={() => navigation.navigate('Selection')} >
                <ButtonText>Voltar</ButtonText>
              </Back_Button>
              <Choose_Button>
                <ButtonText>Reservar agora</ButtonText>
              </Choose_Button>
            </View>
          </Bottom>
        </Back>
      </View>
    ) 
  } else if (errorMessage){
    return (
        <View style={styles.container}>
        <Text>Super weather says hello</Text>
        <Text>Havew a good day fellow human</Text>
        <Text>hmm not found</Text>
        <Text>{errorMessage}</Text>
        
        <StatusBar style="auto" />
      </View>
  
      ) 
  } else {
    return (
      <View style={styles.container}>
        <Title>Loading</Title>
        {/* <ActivityIndicator size = "Large" color={colors.PRIMARY_COLOR}/>
      
        <ReloadIcon loadFunction={load}/> */}
        <StatusBar style="auto" />
      </View>
  
      )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgreen, // #0ff
    // alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 60,
    width: 60,
  },
  
});