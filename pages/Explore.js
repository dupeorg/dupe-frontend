import React from "react";
import {View, FlatList} from "react-native";
import NavBar from "../components/NavBar";
import ItemCard from "../components/ItemCard";

const sampleResults = [
  {
    id: '1',
    name: 'Dupe',
    imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    description: 'Dupe from Disney'
  }
];

export default function Explore({ navigation }) {
  return (
    <View>
      <FlatList
        data={sampleResults}
        renderItem={({item}) => <ItemCard item={item}/>}
        keyExtractor={(item) => item.id}
      />
      <NavBar navigation={navigation} activeTab={"Explore"}/>
    </View>
  );
}