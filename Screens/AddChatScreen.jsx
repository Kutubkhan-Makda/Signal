import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon, Input } from '@rneui/themed';

const AddChatScreen = () => {
    const navigation = useNavigation();
    const [input, setInput] = useStatea('');

    useLayoutEffect(() => {
      navigation.setOptions({
        title:'Add a new Chat',
        headerBackTitle:'Chats',
      })
    }, [])

  return (
    <View style={styles.container}>
      <Input placeholder='Enter a chat name' value={input} onChangeText={(text)=>setInput(text)} leftIcon={<Icon name='wechat' type='antdesign' size={34} color='black'/>}/>
      <Button onPress={createChat} title='Create New Chat'/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{

    },
})