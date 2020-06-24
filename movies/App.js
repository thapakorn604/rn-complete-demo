import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'
import ResultScreen from './src/screens/ResultScreen'
import FavouriteScreen from './src/screens/FavouriteScreen'

import { Provider as MoviesProvider } from './src/contexts/MoviesContext'

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen,
    Result: ResultScreen,
    Favourite: FavouriteScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { title: 'Netfilms' },
  }
)

const App = createAppContainer(navigation)

export default () => {
  return (
    <MoviesProvider>
      <App />
    </MoviesProvider>
  )
}
