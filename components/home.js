import React, { Component } from 'react'
import { Text, StyleSheet, View , ScrollView,SafeAreaView} from 'react-native'

export default class Homescreen extends Component {
  state = {
     categories: [
       {'name': 'SEEDS', 'id': 1},
       {'name': 'FOLWERS', 'id': 2},
       {'name': 'FRUITS', 'id': 3},
       {'name': 'FERTILIZER', 'id': 4},
       {'name': 'SHOW_PLANTS', 'id': 5},
    ]
 }
  render() {
    return (
      <SafeAreaView>
        <ScrollView> {
          this.state.categories.map((item, index) => (
            <View key = {item.id} style = {styles.item}>
            <Text>{item.name}</Text>
            </View>
          ))}
           </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
 }
})
