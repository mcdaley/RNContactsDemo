//-----------------------------------------------------------------------------
// src/screens/app/Lookup/Lookup.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
}                           from 'react-native'
import {
  Text,
  Button,
}                           from 'react-native-elements'
import Icon                 from 'react-native-vector-icons/Ionicons'

import styles               from './styles'

class LookupScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Contacts',
      headerLeft:  (
        <TouchableOpacity onPress = { () => navigation.navigate('UserSettings')}>
          <Icon name='ios-settings' style={styles.headerIcon} />
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      contact: null,
    }
  }

  /**
   * Handle the selection of the contact, may also be a newly created
   * contact. The function simply updates the contact in the state.
   * 
   * @param {*} contact
   */
  handleSelectContact = (contact) => {
    console.log('[info] User selected contact', contact)
    this.setState({
      contact: contact
    })
    this.props.navigation.navigate('Lookup')
    return
  }

  onClickFindContact = () => {
    console.log('[info] Lookup contact')
    this.props.navigation.navigate('Find', {
      onSelectContact: this.handleSelectContact,
    })
    return
  }

  contact = () => {
    if(this.state.contact) {
      let name = `${this.state.contact.givenName} ${this.state.contact.familyName}`
      return (
        <Text>{name}</Text>
      )
    }

    return (
      <Text>
        No contact selected
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Contact Lookup</Text>
        <View style={styles.selectedContact}>
          {this.contact()}
        </View>
        <Button
          title           = 'Find Contact'
          containerStyle  = {styles.buttonContainer}
          onPress         = {this.onClickFindContact}
        />
      </View>
    )
  }
}

// Export the Lookup Screen
export default LookupScreen
