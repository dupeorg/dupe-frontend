import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Header } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

const sampleSearchResults = [
  {
    id: '1',
    name: 'Dupe',
    imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    description: 'Dupe from Disney'
  },
  {
    id: '2',
    name: 'Dupe 2',
    imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    description: 'Dupe from Dupey'
  },
];

export default function SearchBar({ setResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  // TODO: integrate with backend, add set
  const handleSearch = () => {
    console.log(searchQuery);
    setResults(sampleSearchResults);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  input: {
    flex: 1, // Allow input to take up remaining space
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  }
});