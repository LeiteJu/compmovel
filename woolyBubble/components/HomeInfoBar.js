import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

export default function HomeInfoBar({navigation}) {
    return (
        <View style={styles.HomeInfoBar}>
            <Text>Hotéis belíssimos nas suas mãos!</Text>
            <View style={styles.HomeInfoBarRow}>
                <View style={styles.HomeInfoLabels}>
                <Text>Bem vindo ao app!</Text>
                </View>
                <View style={styles.HomeInfoLabels}>
                <Button title="Ok ok, go to selection" onPress={() => navigation.navigate('Selection') } />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    HomeInfoBar: {
        marginTop: 'auto'
        , margin: 15
        , borderWidth: 5
        , borderColor: '#d5f2e6'
        //,alignContent: 'flex-end'
        //, flex: 1
        //, aspectRatio: 0.2
        //, borderRadius: 10
        , backgroundColor: '#d5f2e6'
    },
    HomeInfoBarRow: {
        flexDirection: 'row' //default is column
        , alignItems: 'center'
        , justifyContent: 'space-between'
    },
    HomeInfoLabels: {
        padding: 20
    },

    
})