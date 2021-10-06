import React, { useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from 'react-native';

// Styles
import { 
    Colors, 
    ExternalContainer, 
    InnerContainer, 
    PageTitle, 
    StyledButton,
    ButtonText, 
    StyledFormArea,
    SubTitle} from './styles'

import HomeInfoBar from './HomeInfoBar';
import { Formik } from 'formik';

import { Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import * as Google from 'expo-google-app-auth'

export const {pink, lightgreen, darkgreen, gray, blue, white, green} = Colors;


export default function HomeScreen({navigation}) {

    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    const handleMessage = (message, type = '') => {
        setMessage(message);
        setMessageType(type);
    };

    const googleLogin = function () {

        setGoogleSubmitting(true);
        Alert.alert("Por favor, aguarde... carregando login do Google :)");
        const config = {
            androidClientId: `491396659032-7u0tfg6are724pa92fcqo4fur34q5605.apps.googleusercontent.com`,
            scopes: ['profile', 'email']
        };
        Google
            .logInAsync(config)
            .then((result) => {
                const {type, user} = result;
                if (type == 'success') {
                    const {email, name, photoUrl} = user;
                    Alert.alert(`Seja bem vindo(a),  ${name}`);
                    handleMessage(`Seja bem vindo(a),  ${name}`)
                    // setTimeout(() => Alert.alert("Timeout"))
                } else {
                    Alert.alert("Login falhou :(")
                    handleMessage('Google Signin was cancelled');
                }
                setGoogleSubmitting(false);
            })
            .catch(error => {
                handleMessage('An error occurred. Check your network and try again');
                console.log(error);
                setGoogleSubmitting(false);
            });
    };

    const faceLogin = function () {
        Alert.alert("Por favor, aguarde... carregando login do Facebook :)")
    } 

    return (
        
        <InnerContainer>
            <PageTitle>Wolly Bubble</PageTitle>
            <SubTitle>Por favor, faça Login</SubTitle>
            <Formik>
                <StyledFormArea>
                    <StyledButton google={true} onPress={() => googleLogin()}>
                        <Fontisto name="google" color={white} size={25}/>
                        <ButtonText google={true}>Login com o Google</ButtonText>
                    </StyledButton>
                    <StyledButton facebook={true} onPress={() => faceLogin()}>
                        <Fontisto name="facebook" color={white} size={25}/>
                        <ButtonText facebook={true}>Login com o Facebook</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </Formik>
            {/* <View style={styles.container}>
                <Text>Entre pelo facebook: </Text>
                <StatusBar style="auto" />
                <Button title="Ok ok, go to selection" onPress={() => navigation.navigate('Selection') } />
                <HomeInfoBar navigation={navigation}/>
            </View> */}
            <Text>Encontre o hotel dos sonhos pelo menor preço</Text>

        </InnerContainer>
        
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
})