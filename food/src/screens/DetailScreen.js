import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

import yelp from '../api/yelp'

const DetailScreen = ({ navigation }) => {
  const [restuarant, setRestuarant] = useState(null)

  const id = navigation.getParam('id')

  const getRestuarant = async (id) => {
    const response = await yelp.get(`/${id}`)
    setRestuarant(response.data)
  }

  useEffect(() => {
    getRestuarant(id)
  }, [])

  return (
    restuarant && (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(photo) => photo}
          data={restuarant.photos}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      </View>
    )
  )
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
