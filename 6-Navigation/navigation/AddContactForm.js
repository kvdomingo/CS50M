import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types'
import Constants from 'expo-constants'


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        minWidth: 1,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    button: {
        paddingVertical: 5,
        marginTop: 20,
    },
})

export default class AddContactForm extends React.Component {
    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    getHandler = key => val => {
        this.setState({[key]: val})
    }

    validateForm = () => {
        const names = this.state.name.split(' ')
        if (+this.state.phone >= 0 && names.length >= 2 && names[0] && names[1] && this.state.phone.length === 10 && this.state.name.length > 0) {
            return this.setState({isFormValid: true})
        } else {
            return this.setState({isFormValid: false})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.getHandler('name')}
                    placeholder='Name'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.getHandler('phone')}
                    keyboardType='numeric'
                    placeholder='Phone'
                />
                <Button
                    title="Add Contact"
                    style={styles.button}
                    onPress={this.handleSubmit}
                    disabled={!this.state.isFormValid}
                />
        </KeyboardAvoidingView>
        );
    }
}
