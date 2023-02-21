import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import { Avatar } from '@rneui/themed';
import {} from 'firebase'

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle:{backgroundColor:'#2C6BED'},
  headerTitleStyle:{color:'white'},
  headerTintColor:'white',
  headerTitleAlign: 'center',
};

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{title:'Signal',
          headerStyle:{backgroundColor:'#fff'},
          statusBarStyle:'dark',
          headerTitleStyle:{color:'black'},
          headerLeft:()=>{
            <View style={{marginLeft:20}}>
              <Avatar rounded source={{auth?.currentUser}}/>
            </View>
          }}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
