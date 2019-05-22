//-----------------------------------------------------------------------------
// src/screens/App/Home/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne, 
  border,
}                     from '../../../styles/index'

/**
 * HomeScreen Styles
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
    margin:               10,
    fontSize:             18,
    borderBottomWidth:    1,
    borderBottomColor:    border,
  }
})

// Export the styles
export default styles
