//-----------------------------------------------------------------------------
// src/screens/App/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'
import Contacts               from 'react-native-contacts'

import styles                 from './styles'

/**
 * Home screen for the RNContactsDemo app. User can navigate to settings
 * by clicking on the gear icon.
 */
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerLeft:  (
        <TouchableOpacity onPress = { () => navigation.navigate('UserSettings')}>
          <Icon name='ios-settings' style={styles.headerIcon} />
        </TouchableOpacity>
      )
    }
  }

  /**
   * Test getting the contacts
   */
  getContacts = () => {
    Contacts.getAll( (err, contacts) => {
      if(err) {
        throw err
      }
      console.log('[INFO] Retrieve contacts= ', contacts)
      return contacts
    })
  }

  getContactsAndroid = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          // error
        } else {
          console.log('[INFO] Retrieved contacts on android= ', contacts)
          return contacts
        }
      })
    })
  }

  render() {
    let contact = this.getContacts()

    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Contacts</Text>
        <Icon name='ios-home' size={48} color='blue' />
        <Button
          title   = 'Go to Details'
          onPress = { () => this.props.navigation.navigate('Details') }
        />
      </View>
    )
  }
}

// Export the HomeScreen
export default HomeScreen