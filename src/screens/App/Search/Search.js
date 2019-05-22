//-----------------------------------------------------------------------------
// src/screens/App/Search.js
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
import { 
  SearchBar 
}                             from 'react-native-elements'
import Icon                   from 'react-native-vector-icons/Ionicons'
import Contacts               from 'react-native-contacts'
import Fuse                   from 'fuse.js'

import styles                 from './styles'

/**
 * Search screen for the RNContactsDemo app. User can navigate to settings
 * by clicking on the gear icon.
 */
class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search',
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
      search:   '',
      contacts: [],
    }
  }

  /**
   * Load the contacts while the screen is mounting
   */
  async componentWillMount() {
    if(Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
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
    this.openContactPicker(contact)
  }

  openContactPicker = (contact) => {
    console.log('[INFO] Open contact form for ', contact)
    Contacts.openExistingContact(contact, (err, modifiedContact) => {
      if(err) {
        console.warn('[ERROR] Failed to open contact form= ', err)
      }
      else {
        if(modifiedContact) {
          console.log('[INFO]: Updated contact= ', modifiedContact)
          this.handleUpdateContact(modifiedContact)
        }
      }
    })
  }

  handleUpdateContact(contact) {
    console.log('[INFO] Handle the contact update= ', contact)
    let contacts = this.state.contacts.map( (person) => {
      if(person.recordID !== contact.recordID) {
        return person
      }
      else {
        return contact
      }
    })
    this.setState({
      contacts,
    })
  }

  /**
   * Open the create contact form and let user fill in the fields
   */
  onClickCreateContact = () => {
    console.log('[INFO] Create a new contact')

    Contacts.openContactForm({}, (err, contact) => {
      if(err) {
        console.log('[ERROR] Failed to create contact= ', err)
        throw err
      }
      
      // Update state if contact was saved.
      if(contact) {
        console.log('[INFO]: Created new contact= ', contact)
        this.setState({
          contacts: this.state.contacts.concat(contact)
        })
      }
    })
  }

  /**
   * Delete the contact
   * @param {*} contact
   */
  onClickDeleteContact = (contact) => {
    console.log('[INFO] Delete contact= ', contact)

    Contacts.deleteContact(contact, (err, recordID) => {
      if (err) {
        console.log('[ERROR] Failed to delete contact= ', err)
        throw err;
      }
      else {
        // Deleted contact and update the state
        if(recordID) {
          let contacts = this.state.contacts.filter( (contact) => {
            if(contact.recordID != recordID) {
              return contact
            }
          })

          this.setState({
            contacts,
          })
        }
      }
    })
  }

  /**
   * Render the search bar
   */
  _searchBar = () => {
    const { search } = this.state

    return (
      <SearchBar
        placeholder   = "Search Contacts..."
        onChangeText  = {this.updateSearch}
        value         = {search}
      />
    );
  }

  /**
   * Handle text typed into the search bar
   */
  updateSearch = (text) => {
    this.setState({
      search: text,
    })
  }

  /**
   * Render a single contact's first name and last name. If both are blank
   * then render the contact's company.
   */
  _renderContact = ({item}) => {
    return (
        <View style={styles.contactOverview}>
          <View style={styles.contactLink}>
            <TouchableOpacity onPress={() => this.onClickContact(item)}>
              <Text style={styles.contactLabel}> 
                {`${item.givenName} ${item.familyName}`}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Icon
              name    = 'ios-close-circle-outline'
              style   = {styles.deleteContactIcon}
              onPress = {() => this.onClickDeleteContact(item)}
            />
          </View>
        </View>
    )
  }

  /**
   * Renders a searchable list of contacts. Users can search on first name,
   * last name, email, and phone numbers.
   */
  render() {
    // Configure fuse.js search options
    const options = {
      shouldSort:        true,
      threshold:          0.4,
      location:             0,
      distance:           100,
      maxPatternLength:    32,
      minMatchCharLength:   1,
      keys: [
        "givenName",
        "familyName",
        "emailAddresses.email",
        "phoneNumbers.number"
      ]
    }

    let   fuse      = new Fuse(this.state.contacts, options)
    const {search}  = this.state

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent = { this._searchBar() }
          data                = {search ? fuse.search(search) : fuse.list}
          extraData           = {this.state}
          keyExtractor        = {(item, index) => item.recordID}
          renderItem          = {this._renderContact}
        />
        <View style={{margin: 20}}>
          <Button 
            title   = 'Create New Contact'
            style   = {styles.button}
            onPress = {this.onClickCreateContact}
          />
        </View>
      </View>
    )
  }
}

// Export the SearchScreen
export default SearchScreen