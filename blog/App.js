import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import BlogScreen from './src/screens/BlogScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

import { BlogProvider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Iced Blogs',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
