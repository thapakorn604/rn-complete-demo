import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Context as BlogContext } from '../context/BlogContext'

const BlogScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default BlogScreen
