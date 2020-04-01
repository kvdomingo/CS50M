import React from 'react';
import { Text, SectionList } from 'react-native';
import PropTypes from 'prop-types'
import Row from './Row'

const renderItem = obj => <Row name={obj.item.name} phone={obj.item.phone} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactsList
