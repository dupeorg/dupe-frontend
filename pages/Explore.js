import React from "react";
import {View, FlatList, ScrollView} from "react-native";
import NavBar from "../components/NavBar";
import ItemCard from "../components/ItemCard";

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
  return (
    <ScrollView>
    <View>
      <FlatList
        data={sampleResults}
        renderItem={({item}) => <ItemCard item={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
    </ScrollView>
  );
}
