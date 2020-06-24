import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ keyword, onKeywordChange, onKeywordSubmit }) => (
  <View style={styles.searchBarContainer}>
    <Feather style={styles.searchIcon} name="search" />
    <TextInput
      style={styles.textInput}
      keyboardType="url"
      placeholder="Search"
      value={keyword}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onKeywordChange}
      onSubmitEditing={onKeywordSubmit}
    />
  </View>
)

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  searchIcon: {
    alignSelf: 'center',
    marginHorizontal: 15,
    fontSize: 35,
  },
})

export default SearchBar
