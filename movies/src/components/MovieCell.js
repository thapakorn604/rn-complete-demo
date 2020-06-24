import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { useMovies } from '../hooks/useMovies'

const MovieCell = ({ movie }) => {
  const [, getMovieImage] = useMovies()
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: getMovieImage(movie.poster_path) }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{movie.release_date}</Text>
        <Text numberOfLines={4} ellipsizeMode="tail">
          {movie.overview}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: {
    width: 100,
    height: 120,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
  detail: {
    flex: 1,
    marginHorizontal: 10,
  },
})

export default MovieCell
