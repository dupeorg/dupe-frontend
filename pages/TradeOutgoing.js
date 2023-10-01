import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TradeList from '../components/tradebutton';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <TradeList>
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