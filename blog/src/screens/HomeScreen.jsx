import React, { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'

const HomeScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
