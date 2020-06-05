import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import RestuarantList from '../components/RestuarantList'

import { useRestuarants } from '../hooks/useRestuarants'

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('')
  const [searchRestuarants, restuarants, errorMessage] = useRestuarants('pasta')

  return (
    <View style={styles.container}>
      <SearchBar
        keyword={keyword}
        onKeywordChange={(newKeyword) => setKeyword(newKeyword)}
        onKeywordSubmit={() => searchRestuarants(keyword)}
      />
      {errorMessage != '' && <Text>{errorMessage}</Text>}
      <Text>We found {restuarants.length} restuarants.</Text>
      <RestuarantList header="Cost Effective" />
      <RestuarantList header="Bit Pricer" />
      <RestuarantList header="Big Spender!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default SearchScreen
