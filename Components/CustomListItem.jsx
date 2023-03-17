import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'

const CustomListItem = ({id,chatName,enterChat}) => {
  return (
    <ListItem onPress={()=>enterChat(id,chatName)} key={id} bottomDivider>
      <Avatar rounded source={{uri:'https://e7.pngegg.com/pngimages/985/993/png-clipart-company-businessperson-board-of-directors-advanced-orthopaedic-centers-avtar-company-service.png'}}/>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight:'800'}}>
            {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            xvn fdhdsvh vlkdjvos slfkdjsd sdfsdhffs dfhsdfn sflkjdjvi fsdahfoisdshf ihoifjk
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})