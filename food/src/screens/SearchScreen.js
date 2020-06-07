import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import RestuarantList from '../components/RestuarantList'

import { useRestuarants } from '../hooks/useRestuarants'

const SearchScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState('')
  const [searchRestuarants, restuarants, errorMessage] = useRestuarants('steak')

  const filterRestuarantByPrice = (price) => {
    return restuarants.filter((item) => item.price == price)
  }

  return (
    <View style={styles.container}>
      <SearchBar
        keyword={keyword}
        onKeywordChange={(newKeyword) => setKeyword(newKeyword)}
        onKeywordSubmit={() => searchRestuarants(keyword)}
      />
      {errorMessage != '' && <Text>{errorMessage}</Text>}
      <RestuarantList
        dataSource={filterRestuarantByPrice('$')}
        header="Cost Effective"
        navigation={navigation}
      />
      <RestuarantList
        dataSource={filterRestuarantByPrice('$$')}
        header="Bit Pricer"
        navigation={navigation}
      />
      <RestuarantList
        dataSource={filterRestuarantByPrice('$$$')}
        header="Big Spender!"
        navigation={navigation}
      />
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
