import React from 'react';
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});

const AppNavigator = createSwitchNavigator(
    {
        AddContact: AddContactScreen,
        ContactList: ContactListScreen,
    },
    {
        initialRouteName: 'ContactList',
    },
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
    state = {
        showContacts: true,
        showForm: false,
        contacts: contacts,
    }

    addContact = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            showForm: false,
        }))
    }

    render() {
        return (
            <View />
        );
    }
}
