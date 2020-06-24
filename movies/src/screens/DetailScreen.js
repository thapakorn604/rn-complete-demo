import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const DetailScreen = ({ navigation }) => {
  const { movie } = navigation.state.params
  return (
    <View style={styles.container}>
      {console.log(navigation)}
      <Text>DetailScreen - {movie.title}</Text>
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
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 16,
  },
})

export default DetailScreen
