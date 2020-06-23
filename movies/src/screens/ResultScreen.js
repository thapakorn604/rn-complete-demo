import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import MovieList from '../components/MovieList'

const ResultScreen = ({ navigation }) => {
  const { results, total_pages, page, keyword } = navigation.state.params

  return (
    <View>
      {results.length == 0 && (
        <View style={styles.noResultView}>
          <Text style={styles.notFoundTitle}>Sorry :( </Text>
          <Text style={styles.notFoundDescription}>No result found</Text>
        </View>
      )}
      <MovieList
        dataSource={results}
        total={total_pages}
        page={page}
        keyword={keyword}
        navigation={navigation}
      />
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

export default ResultScreen
