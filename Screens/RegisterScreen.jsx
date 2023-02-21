import { StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Button, Input, Text } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle:'Login',
        })
    },[navigation])

    const register = ()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.update({displayName:name,photoURL:imageUrl})
        }).catch((error)=>alert(error.message));
    }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 0} style={styles.container}>
        <Text h4 style={{marginBottom:50}}>
            Create Signal Account
        </Text>
        <View style={styles.inputContainer}>
            <Input placeholder='Full Name' type='text' value={name} onChangeText={text => setName(text)} autoFocus/>
            <Input placeholder='Email' type='email' value={email} onChangeText={text => setEmail(text)}/>
            <Input placeholder='Password' type='password' value={password} onChangeText={text => setPassword(text)} secureTextEntry/>
            <Input placeholder='Profile Picture URI' type='text' value={imageUrl} onChangeText={text => setImageUrl(text)} onSubmitEditing={register}/>
        </View>
        <Button raised title='Register' onPress={register} containerStyle={styles.button}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

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