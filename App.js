import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';

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
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          
          <Stack.Screen name="Login" component={LoginScreen} />
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
