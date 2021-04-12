import React, { Component } from 'react'
import { Text, StyleSheet, View , ScrollView,SafeAreaView} from 'react-native'

export default class Homescreen extends Component {
  state = {
     categories: [
       {'name': 'SEEDS', 'id': 1,'price':'100'},
       {'name': 'FOLWERS', 'id': 2,'price':'100'},
       {'name': 'FRUITS', 'id': 3,'price':'100'},
       {'name': 'FERTILIZER', 'id': 4,'price':'100'},
       {'name': 'SHOW_PLANTS', 'id': 5,'price':'100'},
    ]
 }
  render() {
    return (
      <SafeAreaView>
        <ScrollView> {
          this.state.categories.map((item, index) => (
            <View key = {item.id} style = {styles.item}>
              <View style={styles.itemcontainer}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              </View>
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
 },
 itemcontainer:{
   flexDirection:'column',
   flex:1,

 }
})
