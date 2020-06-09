import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = (props) => {
  const {
    titleLabel,
    contentLabel,
    buttonTitle,
    initialValue = { title: '', content: '' },
    onSubmit,
  } = props

  const [title, setTitle] = useState(initialValue.title)
  const [content, setContent] = useState(initialValue.content)

  return (
    <View>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button title={buttonTitle} onPress={() => onSubmit(title, content)} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export default BlogPostForm
