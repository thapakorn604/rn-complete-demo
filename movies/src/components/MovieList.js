import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { withNavigation } from 'react-navigation'

import { useMovies } from '../hooks/useMovies'

import MovieCell from './MovieCell'

const MovieList = ({ dataSource, total, page, keyword, navigation }) => {
  const initialState = {
    dataSource,
    total,
    page,
    keyword,
  }

  const [state, setState] = useState(initialState)
  const [isLoading, setLoading] = useState(false)
  const [searchMovies] = useMovies()

  const callAlert = () => {
    Alert.alert('Error', errorMessage, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })
  }

  const getMoreMovies = () => {
    if (state.total != state.page) {
      setLoading(true)
      setTimeout(() => {
        searchMovies(
          state.keyword,
          state.page + 1,
          ({ results, page }) => {
            setState({
              ...state,
              dataSource: [...state.dataSource, ...results],
              page: page,
            })
            setLoading(false)
          },
          () => callAlert()
        )
      }, 500)
    }
  }

  const showIndicator = () =>
    isLoading ? <ActivityIndicator size="large" /> : null

  return (
    dataSource.length != 0 && (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.id}${index}`}
          data={state.dataSource}
          refreshing={isLoading}
          onEndReached={getMoreMovies}
          onEndReachedThreshold={0.5}
          ListFooterComponent={showIndicator}
          renderItem={({ item }) => (
            <View style={styles.cell}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail', { movie: item })
                }}>
                <MovieCell movie={item} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  list: {
    margin: 20,
  },
  cell: {
    marginBottom: 10,
  },
})

export default withNavigation(MovieList)
