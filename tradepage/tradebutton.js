import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Item 1',
    image: require('../images/item1.jpeg'), // Replace with your image path
    description: 'shoe',
  },
  {
    id: '2',
    name: 'Item 2',
    image: require('../images/item2.png'), // Replace with your image path
    description: 'shoe',
  },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => handleItemPress(item)}>
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const handleItemPress = (item) => {
  // Handle item click here
  console.log(`Clicked on ${item.name}`);
};

const Tradebutton = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  itemName: {
    fontSize: 18,
  },
});

export default Tradebutton;