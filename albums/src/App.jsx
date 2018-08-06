import React from 'react'
import {
  Platform,
  Text,
  View,
} from 'react-native'

import Header from './components/Header'

import styles from './styles/App.style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
})

const App = () => (
  <View style={styles.container}>
    <Header name="Albums" />
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>
  </View>
)

export default App
