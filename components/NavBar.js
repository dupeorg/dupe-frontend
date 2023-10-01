import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavBar({ navigation, activeTab }) {
  const navigateTo = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Explore')} style={activeTab === 'Explore' ? styles.activeTab : styles.tab}>
        <Text style={activeTab === 'Explore' ? styles.activeTabText : styles.tabText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Inventory')} style={activeTab === 'Inventory' ? styles.activeTab : styles.tab}>
        <Text style={activeTab === 'Inventory' ? styles.activeTabText : styles.tabText}>Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Profile')} style={activeTab === 'Profile' ? styles.activeTab : styles.tab}>
        <Text style={activeTab === 'Profile' ? styles.activeTabText : styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  tab: {
    padding: 10,
  },
  tabText: {
    color: 'gray',
  },
  activeTab: {
    padding: 10,
  },
  activeTabText: {
    color: 'black',
  },
});