import React, { useState, useContext, useEffect } from 'react'
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
import { Context as MoviesContext } from '../contexts/MoviesContext'

const SearchScreen = ({ navigation }) => {
  const { state } = useContext(MoviesContext)
  const [keyword, setKeyword] = useState('')
  const [keywords, setKeywords] = useState([])
  const [searchMovies] = useMovies()

  useEffect(() => {
    const isDisabled = state.length == 0 ? true : false
    navigation.setParams({ isDisabled })
  }, [state])

  const callAlert = () => {
    Alert.alert('Error', errorMessage, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })
  }

  const navigateToResult = (results, total_pages, page, keyword) => {
    navigation.navigate('Result', { results, total_pages, page, keyword })
  }

  const filterDisplayKeywords = () => {
    return keywords
      .filter((keyword, index) => keywords.indexOf(keyword) === index)
      .slice(0, 5)
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
        data={filterDisplayKeywords()}
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
  let disabled = true
  if (navigation.state.params != null) {
    const { isDisabled } = navigation.state.params
    disabled = isDisabled
  }

  return {
    headerRight: () => {
      return (
        <Button
          title="Favourite"
          disabled={disabled}
          onPress={() => navigation.navigate('Favourite')}
        />
      )
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
