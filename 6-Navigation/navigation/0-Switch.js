import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'teal',
    },
    containerTwo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 25,
        borderColor: 'orange',
    },
});

class ScreenOne extends React.Component {
    render() {
        return (
            <View style={styles.containerOne}>
                <Button
                    title="Go to screen two"
                    onPress={() => {
                        this.props.navigation.navigate('RouteTwo')
                    }}
                />
            </View>
        );
    }
}

class ScreenTwo extends React.Component {
    render() {
        return (
            <View style={styles.containerTwo}>
                <Button
                    title="Go to screen one"
                    onPress={() => {
                        this.props.navigation.navigate('RouteOne')
                    }}
                />
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator({
    RouteOne: ScreenOne,
    RouteTwo: ScreenTwo,
})

export default createAppContainer(AppNavigator)
