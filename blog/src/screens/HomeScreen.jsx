import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext'
import BlogList from '../components/BlogList'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <BlogList navigation={navigation} />
    </View>
  )
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather style={styles.addIcon} name="plus" />
        </TouchableOpacity>
      )
    },
  }
}

const styles = StyleSheet.create({
  addIcon: {
    fontSize: 30,
  },
})

export default HomeScreen
