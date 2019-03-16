import React, { Component } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../../../../assets/fonts/selection.json'

// const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'InstaIcons', 'instaIcons.ttf')

export class IgIcon extends Component {
  render() {
    const { name, style } = this.props

    return null

    return (
      <Icon name={name} style={style} {...this.props} />
    )
  }
}