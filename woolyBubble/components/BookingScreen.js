import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function BookingScreen() {
    return (
        <View>
            <Text>Reservas aqui</Text>
            <Button title="Go to Me Again!" onPress={() => navigation.navigate('Hotel') } />
            <Button title="Go back button" onPress={() => navigation.goBack() } />
        </View>
    )
}
