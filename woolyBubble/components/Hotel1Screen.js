import { StatusBar }  from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button} from 'react-native';
// import * as Location  from 'expo-location';
// import {colors}       from './utils/index'
//import { WEATHER_API_KEY } from 'react-native-dotenv'

const WEATHER_API_KEY = '07fa2b46fcbf7ac2c2bd778c41ed952a'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

// Styles
import { 
  Colors, 
  ExternalContainer,
  InnerContainer,
  Picture,
} from './styles'

export default function App() {

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

      // alert(`Latitude: ${latitude} - Longitude:  ${longitude}`)

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
      main : {temp}
      , weather: [details]
      , name
    } = currentWeather


    return (
      <View style={styles.out_box}>
        <Image style={styles.picure} source={require('./images/hotel1.jpg')} />
        <View style={styles.line_pink}></View>
        <View style={styles.inner_box}>
          <Text style={styles.title}>Japaratinga Lounge Resort</Text>
          <Text>Maravilhoso resort localizado em Alagoas, próximo a algumas das melhores praias do país</Text>
          <Text style={{fontWeight:'bold'}}> Localização: Alagoas, Brasil</Text>
          <Text style={{fontWeight:'bold'}}> Temperatura atual: {temp}ºC</Text>
          <Text style={{fontWeight:'bold'}}> Previsão para os período da sua viagem:</Text>
          <Button title="Voltar" />
          <Button title="Reservar" />
        </View>
      </View>
      // <View style={styles.container}>    
      //   <StatusBar style="auto" />
      //   <View style={styles.main}>
      //     <Image style={styles.picure} source={require('./images/hotel1.jpg')} />
      //     <Text>Temperatura atual:{temp}</Text> 
      //   </View>
      // </View>
    ) // <View style = {styles.main}></View>
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
        <Text>Super weather says hello</Text>
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
    backgroundColor: Colors.blue, // #0ff
    // alignItems: 'center',
    justifyContent: 'center',
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  picure: {
    height: 300,
    width: 300,
  },
  out_box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex:1, // serve pra ocupar a tela toda 
    backgroundColor: Colors.pink,
    padding: 20
  },
  line_pink: {
    height: 1 ,
    width: 100,
    backgroundColor: Colors.pink,
    marginVertical: 10,
  },
  inner_box: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width:420,
    height:900,
    borderRadius:40,
    flex:1,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: Colors.darkgreen,
  }
});