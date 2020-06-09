import React, { useContext } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import { Context as BlogContext } from '../context/BlogContext'
import BlogList from '../components/BlogList'

const HomeScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button title="Post" onPress={addBlogPost} />
      <BlogList navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
