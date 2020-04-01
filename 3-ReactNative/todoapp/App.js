import React, { Component } from 'react';
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native'
import Constants from 'expo-constants'
import CustomCount from './Count.js'


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomCount count={0} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
