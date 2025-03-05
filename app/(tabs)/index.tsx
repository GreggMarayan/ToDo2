import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const app = () => {
  return (

    <SafeAreaView style={Style.page}>
      <Image source={require('../../assets/images/react-logo.png')} style={Style.img} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={Style.text}>Login!</Text>
      </View>
    </SafeAreaView>
  )
}

export default app

const Style = StyleSheet.create({

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 100,
    color: 'white'
  },


  img: {
    width: 100,
    height: 100}

})
