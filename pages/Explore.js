import React, { useState } from "react";
import {View, FlatList} from "react-native";
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

export default function Explore({ navigation }) {
  const [searchResults, setSearchResults] = useState(sampleResults);

  return (
    <View>
      <SearchBar setResults={setSearchResults}/>
      <FlatList
        data={searchResults}
        renderItem={({item}) => <ItemCard item={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
