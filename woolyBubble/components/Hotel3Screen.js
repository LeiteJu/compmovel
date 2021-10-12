import { StatusBar }  from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';
import { FontAwesome5 } from '@expo/vector-icons';
import {saveStorage, readStorage} from './storage';
import moment from "moment";

const WEATHER_API_KEY = '07fa2b46fcbf7ac2c2bd778c41ed952a'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

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

const doublefuncttion = ({temp}) => {
  saveStorage({hotel: "ModeVie Boutique Hotel", temp, date: moment().format("DD-MM-YYYY")});
  Alert.alert("Reserva computada", " Sua reserva foi registra com sucesso. Veja na aba de reservas");
}

export default function Hotel3Screen({navigation}) {

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
          
      const latitude= -29.37750752082946
      const longitude= -50.873824114035926

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
          <Picture source={require('./images/hotel3.jpg')}/>
          <Bottom>
            <Title>ModeVie Boutique Hotel</Title>
            <Resume>Maravilhoso hotel em Gramado, perfeito para desfrutar de um clima mais frio</Resume>
            <Text style={{fontWeight:'bold'}}>Localização: Gramado, Rio Grande do Sul</Text>
            <Box>
              <Text style={{fontWeight:'bold'}}> Temperatura atual: {temp}ºC</Text>
              <Image style={styles.icon} source={{uri:ICONURL}} />
            </Box>
            <View style={{flexDirection:'row'}}>
              <Back_Button onPress={() => navigation.navigate('Selection')} >
                <ButtonText>Voltar</ButtonText>
              </Back_Button>
              <Choose_Button>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                  <ButtonText onPress={() => doublefuncttion({temp})}>Reservar agora                     </ButtonText>
                  <FontAwesome5 name="pencil-alt" size={15} color="#FFF"/>
                </View>
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