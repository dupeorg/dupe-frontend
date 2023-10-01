import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import ItemCard from '../components/ItemCard';

const sampleInventory = [
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

export default function InventoryPage() {
  const [inventory, setInventory] = useState(sampleInventory);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddItem = () => {
    // TODO: integrate with backend
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} isOutgoing={false}/>}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.addItemButton} onPress={toggleModal}>
        <Text style={styles.addItemButtonText}>Add Item</Text>
      </TouchableOpacity>

      {/* Add Item Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Enter item name"
            style={styles.input}
            value={newItemName}
            onChangeText={(text) => setNewItemName(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.addButtonLabel}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
            <Text style={styles.cancelButtonLabel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  },
  addItemButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
  },
  addItemButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
  },
  cancelButtonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
