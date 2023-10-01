import React, {Component} from 'react';
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';


//to add: call get_items
const data = [
  {
    id: '1',
    name: 'Running Shoes',
    image: require('../images/item1.jpeg'), // Replace with your image path
    description: 'shoe',
  },
  {
    id: '2',
    name: 'Brown Shoes',
    image: require('../images/item2.png'), // Replace with your image path
    description: 'shoe',
  },
  // Add more items as needed
];

const renderItem = ({ item }) => {

  const itemStyle = item.selected ? styles.selectedItem : styles.unselectedItem;


  <TouchableOpacity onPress={() => handleItemPress(item)}>
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  </TouchableOpacity>
};

const [lastSelectedItem, setLastSelectedItem] = useState(null);

const handleItemPress = (selectedItem) => {
  const updatedData = data.map((item) => {
    if (item.id === selectedItem.id) {
      return { ...item, selected: !item.selected };
    }
    return item;
  });

  setData(updatedData);
  setLastSelectedItem(selectedItem);
};



const TradeButton = () => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={() => sendTradeRequest()}>
      <Text style={buttonStyles.buttonText}>Request</Text>
    </TouchableOpacity>
  );
};

const sendTradeRequest = () => {
  console.log("test")
}

const TradeList = () => {
  return (
    <View>
    <TradeButton>

    </TradeButton>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 10, // Adjust the border radius as needed
    padding: 10, // Adjust the padding as needed
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
  },
});

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

export default TradeList;