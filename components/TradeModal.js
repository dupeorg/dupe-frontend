import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import TradeList, {data }from './TradeList';
import ItemCard from './ItemCard';

const TradeModal = ({ isVisible, closeModal, item, isOutgoing }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={closeModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
        {/* Your modal content here */}
        <Trade item = {item} isOutgoing={isOutgoing} />
        
        <TouchableOpacity onPress={closeModal}>
          <View style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};



const Trade = ({item, isOutgoing}) => {
  return (
    <View style={styles.container}>
      <ItemCard item={item}></ItemCard>
      <TradeList isOutgoing={isOutgoing}></TradeList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

const buttonStyles = StyleSheet.create({

  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
    paddingBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TradeModal;