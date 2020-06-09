import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext'

const BlogScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

BlogScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit', { id: navigation.getParam('id') })
          }>
          <EvilIcons style={styles.editIcon} name="pencil" />
        </TouchableOpacity>
      )
    },
  }
}

const styles = StyleSheet.create({
  editIcon: {
    fontSize: 35,
  },
})

export default BlogScreen
