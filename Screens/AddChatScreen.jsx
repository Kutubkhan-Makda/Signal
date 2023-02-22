import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Input } from '@rneui/themed';

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
      <Input placeholder='Enter a chat name' value={input} onChangeText={(text)=>setInput(text)} leftIcon={<Icon name='wechat' type='antdesign' size={34} color='black'/>}/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{

    },
})