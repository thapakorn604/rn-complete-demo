import React, { useState, useContext } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import { useMovies } from '../hooks/useMovies'
import { Context as MoviesContext } from '../contexts/MoviesContext'

const DetailScreen = ({ navigation }) => {
  const { movie } = navigation.state.params
  const [, getMovieImage] = useMovies()
  const { state, addFavourite, removeFavourite } = useContext(MoviesContext)
  const [isFavourite, setFavourite] = useState(
    state.some((element) => element.id === movie.id)
  )

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: getMovieImage(movie.poster_path) }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.vote}>
          Average votes: {movie.vote_average.toFixed(2)}
        </Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
      <View style={styles.buttonArea}>
        {!isFavourite ? (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => addFavourite(movie, () => setFavourite(true))}>
            <Text style={styles.buttonText}>Favourite</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() =>
              removeFavourite(movie.id, () => setFavourite(false))
            }>
            <Text style={styles.buttonText}>Unfavourite</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <Button title="Back to Search" onPress={() => navigation.popToTop()} />
      )
    },
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 5,
  },
  image: {
    width: 200,
    height: 300,
    flex: 2,
  },
  detail: {
    margin: 8,
    alignSelf: 'flex-start',
    flex: 2,
  },
  buttonArea: {
    flex: 1,
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    width: Dimensions.get('window').width,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  vote: {
    fontSize: 16,
    marginBottom: 8,
  },
  overview: {
    fontSize: 14,
  },
})

export default DetailScreen
