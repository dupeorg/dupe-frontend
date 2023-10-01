import React, { useState } from "react";
import {View, Text, FlatList} from "react-native";
import NavBar from "../components/NavBar";

export default function Explore({ navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // TODO: Complete
  const handleSearch = (query) => {
    setIsSearching(true);

    // API Call
    const results = [];
    
  };

  return (
    <View>
      <Text>This is Explore</Text>
      {isSearching ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      )}
      <NavBar navigation={navigation} activeTab={"Explore"}/>
    </View>
  );
}