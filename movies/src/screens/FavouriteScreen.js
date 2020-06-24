import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import MovieList from '../components/MovieList'
import { Context as MoviesContext } from '../contexts/MoviesContext'

const FavouriteScreen = ({ navigation }) => {
  const { state } = useContext(MoviesContext)

  return (
    <View>
      {state.length == 0 && (
        <View style={styles.noResultView}>
          <Text style={styles.notFoundTitle}>Opps :( </Text>
          <Text style={styles.notFoundDescription}>
            You have no favourite films
          </Text>
        </View>
      )}
      <MovieList dataSource={state} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  noResultView: {
    alignItems: 'center',
  },
  notFoundTitle: {
    fontSize: 30,
  },
  notFoundDescription: {
    fontSize: 20,
  },
})

export default FavouriteScreen
