import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";

const Stack = createNativeStackNavigator();

// TODO: Add Inventory and Profile Screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Inventory" component={Inventory}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}