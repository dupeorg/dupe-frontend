import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TradeModal from './TradeModal'

export default function ItemCard({ item, isOutgoing }) {
  const [modalVisible, setModalVisible] = useState(false);


  const handleCardClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleCardClick}>
        <View style={styles.card}>
          <Image source={{ uri: item.imageUrl }} resizeMode='cover' style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>

      {/* Render the modal */}
      <TradeModal
        isVisible={modalVisible}
        closeModal={closeModal}
        item={item}
        isOutgoing={isOutgoing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});