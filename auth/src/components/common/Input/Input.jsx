import React from 'react'
import {
  View,
  TextInput,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

const Input = ({
  label,
  placeholder,
  value,
  onChange,
}) => (
  <View elevation={1} style={styles.container}>
    <Text style={[styles.label, { display: label ? 'flex' : 'none' }]}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      autoCorrect={false}
      placeholder={placeholder}
      style={styles.textInput}
    />
  </View>
)

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  label: '',
  placeholder: '',
}

export default Input
