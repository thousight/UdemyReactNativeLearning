import React, { Component } from 'react'
import {

} from 'react-native'

import {
  Button,
  Card,
  CardSection,
  Input,
} from '../common'

import styles from './style'


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="your@email.com"
            value={email}
            onChange={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={password}
            onChange={text => this.setState({ password: text })}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => { }}
            text="Log In"
          />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
