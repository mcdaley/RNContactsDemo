//-----------------------------------------------------------------------------
// src/screens/App/Find/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne, 
  border,
}                     from '../../../styles/index'

/**
 * FindScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    flexDirection:        'column',
    alignItems:           'stretch',
  },
  headerOne: {
    ...headerOne,
  },
  headerIcon: {
    fontSize:             28,
    color:                '#fff',
    margin:               10,
    paddingBottom:        5,
  },
  contactOverview: {
    flexDirection:        'row',
    margin:               10,
    borderBottomWidth:    1,
    borderBottomColor:    border,
  },
  contactLink: {
    flex:                 10,
  },
  contactLabel: {
    fontSize:             18,
    flex:                 1,
  },
  deleteContactIcon: {
    flex:                 1,
    fontSize:             16,
    color:                '#CCCCCC',
  }
})

// Export the styles
export default styles
