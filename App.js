import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import { Avatar } from '@rneui/themed';
import {auth,db} from './firebase'

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle:{backgroundColor:'#2C6BED'},
  headerTitleStyle:{color:'white'},
  headerTintColor:'white',
  headerTitleAlign: 'center',
};

export default function App() {
  const navigation = useNavigation();

  const signOut = ()=>{
    auth.signOut().then(()=>{navigation.navigate('Login')})
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{title:'Signal',
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
            
          ),}}/>
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
