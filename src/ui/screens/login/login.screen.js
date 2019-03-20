import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native'
import { styles } from './login.style'
import LinearGradient from 'react-native-linear-gradient'

const logo_img = require('../../../img/instagram_logo.png')

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
    }
  }

  _renderHeader() {
    return (
      <View style={StyleSheet.flatten([styles.header, styles.flexCenter])}>
        <Image source={logo_img} style={styles.logo} />
        <Text style={styles.textRegular}>Sing in and use more features</Text>
      </View>
    )
  }

  _renderFields() {
    return (
      <View>
        <TextInput
          style={styles.textFields}
          placeholder="Email or username"
          onChangeText={login => this.setState({ login })}
        />
        <TextInput
          style={styles.textFields}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />
        <View style={StyleSheet.flatten([styles.textFields, styles.loginButton])}>
          <Button onPress={this._onPressButton} title="Sign in" color="white" />
        </View>
        <Text style={styles.textSmall}>Forgot your login details? Get help signing in</Text>
      </View>
    )
  }
  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']}
      >
        <View style={StyleSheet.flatten([styles.container, styles.flexCenter])}>
          {this._renderHeader()}
          {this._renderFields()}
        </View>
      </LinearGradient>
    )
  }
}
