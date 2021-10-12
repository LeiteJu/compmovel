import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import {
    Title,
    Back_Green,
    GoTo,
    ButtonText,
    SelectionScreenColumnHotel,
    Resume
} from './styles'

export default function BookingScreen({navigation}) {
    return (
        <Back_Green>
            <Title>Reservas aqui</Title>
            <SelectionScreenColumnHotel>
                <Resume>Hotel 1...</Resume>
            </SelectionScreenColumnHotel>
            <GoTo onPress={() => navigation.navigate('Selection')}>
                <ButtonText>Voltar</ButtonText>
            </GoTo>
        </Back_Green>
    )
}