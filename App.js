import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Explore from "./pages/Explore";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

const Stack = createNativeStackNavigator();

// TODO: Add Inventory and Profile Screens
export default function App() {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}