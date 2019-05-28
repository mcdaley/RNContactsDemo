//-----------------------------------------------------------------------------
// src/screens/app/Contact/Contact.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
}                             from 'react-native'
import {
  Text, 
  Input,
  Button,
}                             from 'react-native-elements'

import styles                 from './styles'

class ContactScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      givenName:    '',
      familyName:   '',
      company:      '',
    }
  }

  onChangeGivenName = (text) => {
    this.setState({
      givenName: text,
    })
  }

  onChangeFamilyName = (text) => {
    this.setState({
      familyName: text,
    })
  }

  onChangeCompany = (text) => {
    this.setState({
      company:  text,
    })
  }

  /**
   * Save the contact
   */
  onSaveContact = () => {
    console.log('[info] Validate form fields and save contact')
    contact = {
      givenName:  this.state.givenName,
      familyName: this.state.familyName,
      company:    this.state.company,
    }

    let onSaveContact = this.props.navigation.getParam('onSaveContact')
    onSaveContact(contact)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>New Contact</Text>
        <Input
          placeholder   = 'First Name'
          value         = {this.state.givenName}
          onChangeText  = { this.onChangeGivenName}
        />
        <Input
          placeholder   = 'Last Name'
          value         = {this.state.familyName}
          onChangeText  = { this.onChangeFamilyName}
        />
        <Input
          placeholder   = 'Company'
          value         = {this.state.company}
          onChangeText  = { this.onChangeCompany}
        />
        <Button
          title   = 'Save Contact'
          onPress = {this.onSaveContact}
        />

      </View>
    )
  }
}

// Export the ContactScreen
export default ContactScreen