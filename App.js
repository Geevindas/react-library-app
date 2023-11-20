	import { StatusBar } from 'expo-status-bar';
	import { StyleSheet, Text, View } from 'react-native';
	
	// import Home from './screens/HomeScreen';
	// import Login from './screens/LoginScreen';
	// import Register from './screens/RegisterScreen';
	
	import { NavigationContainer } from '@react-navigation/native';
	import { createNativeStackNavigator } from '@react-navigation/native-stack';
	import HomeScreen from './screens/HomeScreen';
	import LoginScreen from './screens/LoginScreen';
	import RegisterScreen from './screens/RegisterScreen';
	import Dashbordscreen from './screens/Dashbordscreen';
	import categoriesScreen from './screens/categoriesScreen';
	
	const Stack = createNativeStackNavigator();
	
	export default function App() {
	  return (
	    <NavigationContainer>
	      <Stack.Navigator>
	        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
	        <Stack.Screen name="register" component={RegisterScreen} />
	        <Stack.Screen name="dashbord" component={Dashbordscreen} />
	        <Stack.Screen name="categories" component={categoriesScreen} />
	      </Stack.Navigator>
	    </NavigationContainer>
	  );
	}
	
	const styles = StyleSheet.create({
	 
	});
