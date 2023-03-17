import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../Components/CustomListItem'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/themed'
import { auth,db } from '../firebase'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'


const HomeScreen = () => {
  const navigation = useNavigation();

  const [chats, setChats] = useState([]);

  const signOut = ()=>{
    auth.signOut().then(()=>{navigation.navigate('Login')})
  }

  useLayoutEffect(() => {
    navigation.setOptions({
    title:'Signal',
    headerStyle:{backgroundColor:'#fff'},
    headerTitleStyle:{color:'black'},
    headerLeft:()=>(
      <View style={{marginLeft:7}}>
        <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
          <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
        </TouchableOpacity>
      </View>
    ),
    headerRight:()=>(
      <View style={{flexDirection:'row',justifyContent:'space-between',width:80,height:25}}>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon type='antdesign' name='camerao' sixe={24} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('AddChat')}>
          <Icon type='entypo' name='pencil' sixe={24} color='black'/>
        </TouchableOpacity>
      </View>
    ),})
  }, [navigation])

  useEffect(() => {
    const unSubscribe = db.collection('chats').onSnapshot(snapshot => (
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ))
    return unSubscribe;
  }, [])

  const enterChat = (id,chatName) => {
    navigation.navigate('Chat',{
      id,chatName
    });
  }
  

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id,data:{chatName}}) => (<CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    height:"100%",
  },
})