import { createBottomTabNavigator } from 'react-navigation'

import { FeedStack } from '@ui/navigator/stacks/feed'
import { DirectStack } from '@ui/navigator/stacks/direct'

export const RootTabBar = createBottomTabNavigator({
  FeedStack: {
    screen: FeedStack,
  },
  DirectStack: {
    screen: DirectStack,
  },
})
