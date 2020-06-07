import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.getParam('name'),
      }),
    },
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { title: 'Yummy Finder by Yelp' },
  }
)

export default createAppContainer(navigation)
