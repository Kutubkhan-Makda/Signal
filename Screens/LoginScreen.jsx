import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image, Input } from '@rneui/themed';

const LoginScreen = () => {
  return (
    <View>
      <Image source={require('../assets/Logo_Signal.png')} style={{width:200,height:200}}/>
      <View style={styles.inputContainer}>
        <Input placeholder=''/>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer:{

    },
})