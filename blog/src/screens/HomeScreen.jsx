import React, { useContext } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext'
import BlogList from '../components/BlogList'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button title="Post" onPress={addBlogPost} />
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
