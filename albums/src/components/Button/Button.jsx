import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'


const Button = ({ onPress, text }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>
      {text}
    </Text>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
}

Button.defaultProps = {
  text: 'Click',
}

export default Button
