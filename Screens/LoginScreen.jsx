import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Image, Input } from '@rneui/themed';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

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
      <Button containerStyle={styles.button} type='outline' title='Register' onPress={()=>navigation.navigate('Register')}/>
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
        backgroundColor:'white',
    },
    inputContainer:{
        width:300,
    },
    button:{
        width:200,
        marginTop:10,
    },
})