import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Item from './Item';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        width: '100%',
    },
    titleText: {
        fontSize: 36,
        marginVertical: 20,
    },
});

export default class Home extends React.Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        fetch('http://names.drycodes.com/25')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    contacts: data.map((item, i) => ({
                        name: item.split('_').join(' '),
                        id: i,
                    })
                )});
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.contacts}
                    renderItem={({ item }) => <Item name={item.name} navigation={this.props.navigation} />}
                    style={styles.listContainer}
                    keyExtractor={item => item.id}
                    />
            </View>
        );
    }
}
