import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../Components/CustomListItem'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/themed'
import { auth,db } from '../firebase'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'


const HomeScreen = () => {
  const navigation = useNavigation();

  const signOut = ()=>{
    auth.signOut().then(()=>{navigation.navigate('Login')})
  }

  useLayoutEffect(() => {
    navigation.setOptions({
    title:'Signal',
    headerStyle:{backgroundColor:'#fff'},
    statusBarStyle:'dark',
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
        <TouchableOpacity activeOpacity={0.5}>
          <Icon type='entypo' name='pencil' sixe={24} color='black'/>
        </TouchableOpacity>
      </View>
    ),})
  }, [navigation])

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})