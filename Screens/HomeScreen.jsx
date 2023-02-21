import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CustomListItem from '../Components/CustomListItem'

const HomeScreen = () => {
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