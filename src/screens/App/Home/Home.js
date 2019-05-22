//-----------------------------------------------------------------------------
// src/screens/App/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  Platform,
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
      headerTitle: 'Contacts',
      headerLeft:  (
        <TouchableOpacity onPress = { () => navigation.navigate('UserSettings')}>
          <Icon name='ios-settings' style={styles.headerIcon} />
        </TouchableOpacity>
      )
    }
  }

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
    }
  }

  /**
   * Load the contacts while the screen is mounting
   */
  async componentWillMount() {
    if(Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title':    'Contacts',
          'message':  'RNContacts Demo would like to view your contacts'
        }
      ).then( ()=> {
        this.loadContacts()
      })  
    }
    else {
      this.loadContacts()
    }
  }

  /**
   * Load contacts from the phone
   */
  loadContacts = () => {
    Contacts.getAll( (err, contacts) => {
      if(err === 'denied') {
        console.warn('[WARN] Permission to access contacts was denied')
      }
      console.log('[INFO] Retrieve contacts= ', contacts)
      this.setState({
        contacts,
      })
    })
  }

  /**
   * Navigate to the contact details page and open the phones addContact
   * form.
   */
  onClickContact = (contact) => {
    console.log('[INFO] Selected contact id= ', contact.givenName)
    this.props.navigation.push('Details', {
      contact: contact,
    })
  }

  /**
   * Render a single contact's first name and last name. If both are blank
   * then render the contact's company.
   */
  _renderContact = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.onClickContact(item)}>
        <View style={styles.contactOverview}>
          <Text> {`${item.givenName} ${item.familyName}`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  /**
   * Render a list of the first 10 contacts
   */
  render() {
    return (
      <View style={styles.container}>    
        <FlatList
          data                = {this.state.contacts}
          extraData           = {this.state}
          keyExtractor        = {(item, index) => item.recordID}
          renderItem          = {this._renderContact}
        />
      </View>
    )
  }
}

// Export the HomeScreen
export default HomeScreen