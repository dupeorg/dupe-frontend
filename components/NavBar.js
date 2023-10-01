import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import Inventory from '../pages/Inventory';

const Tab = createMaterialBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: 'Inventory',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="inventory" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
