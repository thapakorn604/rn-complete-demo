import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'

import RestuarantDetail from '../components/RestuarantDetail'

const RestuarantList = ({ dataSource, header, navigation }) => {
  return (
    dataSource.length != 0 && (
      <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Detail', { id: item.id, name: item.name })
              }}
            >
              <RestuarantDetail restuarant={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})

export default withNavigation(RestuarantList)
