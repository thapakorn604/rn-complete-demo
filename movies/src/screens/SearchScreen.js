import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native'

import SearchBar from '../components/SearchBar'
import { useMovies } from '../hooks/useMovies'

const SearchScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState('')
  const [keywords, setKeywords] = useState([])
  const [searchMovies] = useMovies()

  const callAlert = () => {
    Alert.alert('Error', errorMessage, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })
  }

  const navigateToResult = (results, total_pages, page, keyword) => {
    navigation.navigate('Result', { results, total_pages, page, keyword })
  }

  return (
    <View style={styles.container}>
      <SearchBar
        keyword={keyword}
        onKeywordChange={(newKeyword) => setKeyword(newKeyword)}
        onKeywordSubmit={() => {
          searchMovies(
            keyword,
            1,
            ({ results, total_pages, page }) => {
              setKeywords([keyword, ...keywords])
              navigateToResult(results, total_pages, page, keyword)
            },
            () => callAlert()
          )
        }}
      />

      <FlatList
        data={keywords.slice(0, 5)}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                searchMovies(
                  item,
                  1,
                  ({ results, total_pages, page }) =>
                    navigateToResult(results, total_pages, page, keyword),
                  () => callAlert()
                )
              }}>
              <View style={styles.itemRender}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

SearchScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return <Button title="Favourite" />
    },
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  itemRender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
})

export default SearchScreen
