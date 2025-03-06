import React from 'react'
import { StyleSheet, Image, TextInput, Button } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const app = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Style.page}>
        <Image source={require('../../assets/images/react-logo.png')} style={Style.img} />
        <TextInput style={Style.input} inputMode='email' clearButtonMode='while-editing' placeholder='Username' />
        <TextInput style={Style.input} secureTextEntry={true} clearButtonMode='while-editing' placeholder="Password" />
        <Button title='Login' onPress={() => { }} />
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
    height: 30,
    borderRadius: 10,
    margin: 10,
    padding: 5
  }

})
