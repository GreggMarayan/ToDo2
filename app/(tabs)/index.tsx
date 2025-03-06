import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const app = () => {
  return (
<SafeAreaProvider>
    <SafeAreaView style={Style.page}>
      <Image source={require('../../assets/images/react-logo.png')} style={Style.img} />
      <View>
        <TextInput style={Style.input} placeholder='Username'/>
        <TextInput style={Style.input} placeholder="Password"/>
      </View>
    </SafeAreaView>
</SafeAreaProvider>
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
    height: 100
  },

  input: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'grey',
    color: 'white',
    width: 200,
    height: 20, 
    borderRadius: 10,
    margin: 10,
    padding: 5
    }

})
