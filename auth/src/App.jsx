import React from 'react'
import {
  View,
} from 'react-native'

import { Header } from './components/common'

import styles from './App.style'

const App = () => (
  <View style={styles.container}>
    <Header name="Albums" />
  </View>
)

export default App
