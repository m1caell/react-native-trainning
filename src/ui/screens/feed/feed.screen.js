import React from 'react'
import { ScrollView } from 'react-native'

import { BaseScreen } from '@ui/screens/base'

import api from '@api/feed.json'

import { Post } from '@ui/components/post.component'

export class FeedScreen extends BaseScreen {
  renderContent() {
    return (
      <ScrollView>
        {api.feed.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    )
  }
}
