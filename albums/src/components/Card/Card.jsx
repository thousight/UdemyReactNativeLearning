import React from 'react'
import {
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

const Card = ({ children }) => (
  <View elevation={1} style={styles.containerStyle}>
    { children }
  </View>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
