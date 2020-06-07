import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const RestuarantDetail = ({ restuarant }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: restuarant.image_url }} />
    <Text style={styles.name}>{restuarant.name}</Text>
    <Text>
      {restuarant.rating} Ratings {restuarant.review_count} Reviews
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default RestuarantDetail
