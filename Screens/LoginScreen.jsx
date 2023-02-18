import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed';

const LoginScreen = () => {
  return (
    <View>
      <Image source={require('../assets/Logo_Signal.png')} style={{width:200,height:200}}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})