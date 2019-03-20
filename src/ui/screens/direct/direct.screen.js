import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import api from '@api/direct.json'
import { styles } from './direct.style'
import { BaseScreen } from '@ui/screens/base'

import backIcon from '@img/back.png'
import addIcon from '@img/add.png'
import searchIcon from '@img/search.png'
import cameraIcon from '@img/camera.png'
import cameraIcon2 from '@img/camera2.png'

export class DirectScreen extends BaseScreen {
  _renderNavBar() {
    return (
      <View style={styles.navbarContainer}>
        <Image source={backIcon} resizeMode="contain" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.navbarTitle}>Direct</Text>
        </View>
        <Image source={addIcon} resizeMode="contain" style={styles.icon} />
      </View>
    )
  }

  _renderSearch() {
    return (
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.icon} />
        <Text style={styles.searchPlaceholder}>Pesquisar</Text>
      </View>
    )
  }

  _renderContact(contact) {
    return (
      <View style={styles.contactContainer} key={contact.id}>
        <Image source={{ uri: contact.photo }} style={styles.contactPhoto} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text>{contact.user}</Text>
        </View>
        <Image source={cameraIcon} style={styles.icon} />
      </View>
    )
  }

  _renderCameraButton() {
    return (
      <TouchableOpacity style={styles.cameraButton}>
        <Image source={cameraIcon2} style={styles.cameraButtonIcon} />
        <Text style={styles.cameraButtonText}>Camera</Text>
      </TouchableOpacity>
    )
  }

  _renderContacts() {
    return api.contacts.map(contact => this._renderContact(contact))
  }

  renderContent() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {this._renderNavBar()}
        {this._renderSearch()}
        <ScrollView>{this._renderContacts()}</ScrollView>
        {this._renderCameraButton()}
      </SafeAreaView>
    )
  }
}
