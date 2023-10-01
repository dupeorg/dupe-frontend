import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const data = [
  {
    id: '1',
    name: 'Running Shoes',
    imageUrl: require('../images/item1.jpeg'), // Replace with your image path
    description: 'shoe',
  },
  {
    id: '2',
    name: 'Brown Shoes',
    imageUrl: require('../images/item2.png'), // Replace with your image path
    description: 'shoe',
  },
  // Add more items as needed
];

const TradeList = ({isOutgoing}) => {
  const [selectedItem, setSelectedItem] = useState(null); // State to store the last selected item
  const [requestSent, setRequestSent] = useState(false);

  const handleRequest = () => {
    setRequestSent(true);
  };

  const renderItem = ({ item }) => {
    const itemStyle = item === selectedItem ? styles.selectedItem : styles.unselectedItem;

    return (
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <View style={[styles.itemContainer, itemStyle]}>
          <Image source={item.imageUrl} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleItemPress = (item) => {
    setSelectedItem(item); // Update the selected item in state
  };

  const sendTradeRequest = () => {
    if (selectedItem) {
      console.log('Requesting item:', selectedItem);
      // Implement your POST request logic here
      setRequestSent(true);
    } else {
      console.log('No item selected');
    }
  };

  return (
    <View>
      <TouchableOpacity style={buttonStyles.button} onPress={sendTradeRequest} disabled={requestSent}>
        <Text style={buttonStyles.buttonText}>
        {isOutgoing
            ? requestSent
              ? 'Request Sent'
              : 'Request'
            : requestSent
            ? 'Accept Sent'
            : 'Accept'}
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  selectedItem: {
    backgroundColor: 'lightpink', // Add your selected item style here
  },
  unselectedItem: {},
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
