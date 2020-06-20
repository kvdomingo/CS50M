import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    buttonContainer: {
        color: '#000',
        padding: 30,
    },
    itemContainer: {
        borderColor: '#ddd',
        borderStyle: 'solid',
        borderWidth: 1,
    },
});


export default function Item({ name, navigation}) {
    return (
        <View style={styles.itemContainer}>
            <Text
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Details', { name })}
                >
                {name}
            </Text>
        </View>
    );
}
