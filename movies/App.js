import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'
import ResultScreen from './src/screens/ResultScreen'

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { title: 'Netfilms' },
  }
)

export default createAppContainer(navigation)
