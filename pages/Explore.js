import React, { useState, useEffect } from "react";
import {View, FlatList, StyleSheet} from "react-native";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";

const sampleResults = [
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
  {
    id: '3',
    name: 'Dupe 3',
    imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    description: 'Dupe from Dupey'
  },
  {
    id: '4',
    name: 'Dupe 4',
    imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    description: 'Dupe from Dupey'
  },
];

const getItem=async()=>{

  const response =  fetch('http://localhost:8000/get_items', {
    //method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      name,
      imageUrl,
      description,
     }),
    });
  
}

export default function Explore() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(getItem())
  });
  

  return (
    <View style={styles.container}>
      <SearchBar setResults={setSearchResults}/>
      <FlatList
        data={searchResults}
        renderItem={({item}) => <ItemCard item={item} isOutgoing={true}/>}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 64, 
  }
});