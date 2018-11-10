import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class HeaderApp extends Component {
  render() {
    return (
      <View style={[styles.body, {backgroundColor: "#020DB0"}]}>
        <View style={styles.container}>
          <Text style={styles.textHeader}> Hitung Diskon </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    body:{
        width: "100%",
        padding: 20,
        elevation: 5,
    },
    container:{
      alignContent:"center",
      alignSelf: "center",
    },
    textHeader:{
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold"
    }
})