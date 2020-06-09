import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import BlogScreen from './src/screens/BlogScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

import { Provider as BlogProvider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Blog: BlogScreen,
    Create: {
      screen: CreateScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Post a Blog',
      }),
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Edit a Blog',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: `Iced's Blogs`,
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
