import React from 'react'
import {
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

const CardSection = ({ children }) => (
  <View elevation={1} style={styles.containerStyle}>
    { children }
  </View>
)

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardSection
