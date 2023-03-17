import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Icon } from '@rneui/themed';

const ChatScreen = ({route}) => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Chat',
            headerBackTitleVisible:false,
            headerTitleAlign:'left',
            headerTitle:()=>(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Avatar rounded source={{uri:'https://e7.pngegg.com/pngimages/985/993/png-clipart-company-businessperson-board-of-directors-advanced-orthopaedic-centers-avtar-company-service.png'}}/>
                    <Text style={{color:'white',marginLeft:10,fontWeight:'700'}}>{route.params.chatName}</Text>
                </View>
            ),
            headerLeft:()=>(
                <TouchableOpacity style={{marginLeft:10}} onPress={navigation.goBack}>
                    <Icon name='arrowleft' type='antdesign' size={24} color='white'/>
                </TouchableOpacity>
            ),
            headerRight:()=>(
                <View>
                    <TouchableOpacity>
                        <Icon name='video-camera' type='fontawesome' size={24} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                </View>
            ),
        })
    },[navigation])

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})