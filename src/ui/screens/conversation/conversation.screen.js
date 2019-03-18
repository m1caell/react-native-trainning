import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native'
import { styles } from './conversation.style'
import apiConversation from '../../../api/conversation.json'

const backIcon = require('../../../img/back.png')
const addIcon = require('../../../img/add.png')

export class Conversation extends Component {
  constructor() {
    super()
    this.state = {
      api: null,
    }
  }

  componentDidMount() {
    this.setState({ api: apiConversation })
  }

  _renderNavBar = () => {
    if (!this.state.api) return
    const { userFrom } = this.state.api

    return (
      <View style={styles.navbarContainer}>
        <Image source={backIcon} resizeMode="contain" style={styles.icon} />
        <Image source={{ uri: userFrom.userProfile }} resizeMode="cover" style={styles.profileImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.navbarTitle}>{userFrom.userName}</Text>
        </View>
        <Image source={addIcon} resizeMode="contain" style={styles.icon} />
      </View>
    )
  }

  _renderChatArea() {
    if (!this.state.api) return
    const { messages } = this.state.api

    const lines = messages.slice(0).reverse().map((item, index) => {
      const prepareStyle = this.state.api.userFrom.id === item.userId ? styles.userSend : styles.userReceive
      return (
        <View key={index} style={prepareStyle}>
          <TouchableHighlight style={styles.chatChip}>
            <Text>{item.content}</Text>
          </TouchableHighlight>
        </View>
      )
    })

    return <ScrollView style={styles.chatContent}><View style={styles.chatContent}>{lines}</View></ScrollView>
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderNavBar()}
        {this._renderChatArea()}
      </View>
    )
  }
}
