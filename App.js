import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import necessary Firebase modules
import { initializeApp } from '@react-native-firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1p-zLmSGmQ44na0mrHCYj5advgVdi7Y",
  authDomain: "dupebackend.firebaseapp.com",
  databaseURL: "https://dupebackend-default-rtdb.firebaseio.com",
  projectId: "dupebackend",
  storageBucket: "dupebackend.appspot.com",
  messagingSenderId: "288564937824",
  appId: "1:288564937824:web:7fe8b132f880e95fe0ef05",
  measurementId: "G-9XPNF17JR6"
};

// Initialize Firebase with your configuration
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized");

// Your main React Native code follows here...


const Stack = createNativeStackNavigator();

// TODO: Add Inventory and Profile Screens
export default function App() {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}


// Connect to Firestore emulator
const db = firebase.firestore();
if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080); // Update with your emulator host and port
}