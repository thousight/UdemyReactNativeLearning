import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

import { firebaseConfig } from '../config'
import styles from './App.style'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
