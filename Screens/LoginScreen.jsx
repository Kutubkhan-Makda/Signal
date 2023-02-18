import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Input } from '@rneui/themed';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = ()=>{

    }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0} style={styles.container}>
      <Image source={require('../assets/Logo_Signal.png')} style={{width:200,height:200}}/>
      <View style={styles.inputContainer}>
        <Input placeholder='Email' autoFocus type='email' value={email} onChangeText={text => setEmail(text)}/>
        <Input placeholder='Password' secureTextEntry type='password' value={password} onChangeText={text => setPassword(text)}/>
      </View>
      <Button containerStyle={styles.button} title='Login' onPress={signIn}/>
      <Button containerStyle={styles.button} type='outline' title='Register'/>
      <View style={{height:100}}></View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    inputContainer:{

    },
    button:{

    },
})