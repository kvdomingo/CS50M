import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    titleText: {
        fontSize: 28,
        marginVertical: 20,
    },
});

function generateNumber() {
    return '09xx xxx xxxx'.replace(/x/g, () => {
        return parseInt(Math.floor(Math.random() * 10)).toString()
    });
}

export default function Details({ name, route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{route.params.name}</Text>
            <Text>{generateNumber()}</Text>
        </View>
    );
}
