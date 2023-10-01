import React, { useState } from "react";
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

export default function Explore() {
  const [searchResults, setSearchResults] = useState(sampleResults);

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