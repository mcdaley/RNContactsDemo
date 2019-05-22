//-----------------------------------------------------------------------------
// src/screens/App/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Home Screen</Text>
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