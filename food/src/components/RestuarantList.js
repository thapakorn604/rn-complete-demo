import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const RestuarantList = ({ header }) => {
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default RestuarantList
