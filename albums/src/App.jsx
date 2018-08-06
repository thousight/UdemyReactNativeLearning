import React from 'react'
import {
  View,
} from 'react-native'

import Header from './components/Header'
import AlbumList from './components/AlbumList'

import styles from './styles/App.style'

const App = () => (
  <View style={styles.container}>
    <Header name="Albums" />
    <AlbumList />
  </View>
)

export default App
