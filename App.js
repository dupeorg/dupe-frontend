import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TradeOutgoing from "./pages/TradeOutgoing";

const Stack = createNativeStackNavigator();

// TODO: Add Inventory and Profile Screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Inventory" component={Inventory}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="TradeOutgoing" component={TradeOutgoing}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
