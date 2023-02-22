import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Input } from '@rneui/themed';

const AddChatScreen = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState('');

    useLayoutEffect(() => {
      navigation.setOptions({
        title:'Add a new Chat',
        headerBackTitle:'Chats',
      })
    }, [])

  return (
    <View style={styles.container}>
      <Input placeholder='Enter a chat name' value={input} onChangeText={(text)=>setInput(text)}/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{

    },
})