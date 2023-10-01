import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TradeList, {data }from '../components/tradebutton';
import ItemCard from '../components/ItemCard';

const MyComponent = (isOutgoing) => {
  return (
    <View style={styles.container}>
      <ItemCard item={data}></ItemCard> 
      <TradeList isOutgoing = {isOutgoing}>
      </TradeList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyComponent;