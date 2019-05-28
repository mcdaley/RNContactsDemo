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
}                             from 'react-native-elements'

import styles                 from './styles'

class ContactScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName:  '',
      lastName:   '',
      company:    '',
    }
  }

  onChangeFirstName = (text) => {
    this.setState({
      firstName: text,
    })
  }

  onChangeLastName = (text) => {
    this.setState({
      lastName: text,
    })
  }

  onChangeCompany = (text) => {
    this.setState({
      company:  text,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>New Contact</Text>
        <Input
          placeholder   = 'First Name'
          value         = {this.state.firstName}
          onChangeText  = { this.onChangeFirstName}
        />
        <Input
          placeholder   = 'Last Name'
          value         = {this.state.lastName}
          onChangeText  = { this.onChangeLastName}
        />
        <Input
          placeholder   = 'Company'
          value         = {this.state.company}
          onChangeText  = { this.onChangeCompany}
        />
      </View>
    )
  }
}

// Export the ContactScreen
export default ContactScreen