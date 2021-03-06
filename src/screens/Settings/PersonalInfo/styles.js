//-----------------------------------------------------------------------------
// src/screens/Settings/PersonalInfo/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * PersonalInfoScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
  }
})

// Export the styles
export default styles
