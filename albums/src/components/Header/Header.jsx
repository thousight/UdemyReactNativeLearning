import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

const Header = ({ name }) => (
  <View elevation={1} style={styles.header}>
    <Text style={styles.headerText}>
      {name}
    </Text>
  </View>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Header
