import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../Components/CustomListItem'

const HomeScreen = () => {
    useLayoutEffect(() => {
        title:''
    }, [])

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