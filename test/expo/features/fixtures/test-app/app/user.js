import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { bugsnagClient } from './bugsnag'

export default class User extends Component {
  userClient = () => {
    bugsnagClient.set('user', {
      name: "userClientName"
    })
    bugsnagClient.notify(new Error('UserClientError'))
  }

  userCallback = () => {
    bugsnagClient.notify(new Error('UserCallbackError'), report => {
      report.set('user', {
        name: "userCallbackName"
      })
    })
  }

  render() {
    return (
      <View>
        <Button accessibilityLabel="userClientButton"
          title="userClient"
          onPress={this.userClient}
        />
        <Button accessibilityLabel="userCallbackButton"
          title="userCallback"
          onPress={this.userCallback}
        />
      </View>
    )
  }
}
