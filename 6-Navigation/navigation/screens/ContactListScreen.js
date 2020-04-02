import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Constants } from 'expo-constants';
import AddContactForm from '../AddContactForm';
import SectionListContacts from '../ContactsList';


export default class ContactListScreen extends Component {
    state = {
        showContacts: true,
    }

    toggleContacts = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts,
        }))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="toggle contacts" onPress={this.toggleContacts} />
                <Button title="add contact" onPress={this.showForm} />
                {this.state.showContacts && (
                    <SectionListContacts contacts={this.props.screenProps.contacts} />
                )}
            </View>
        );
    }
}
