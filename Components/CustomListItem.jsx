import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar rounded source={{uri:'https://e7.pngegg.com/pngimages/985/993/png-clipart-company-businessperson-board-of-directors-advanced-orthopaedic-centers-avtar-company-service.png'}}/>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight:'800'}}>
            Youtube
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>

        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})