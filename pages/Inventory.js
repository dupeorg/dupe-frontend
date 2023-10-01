import React, { useState } from "react";
import {View, Text, FlatList} from "react-native";
import NavBar from "../components/NavBar";

export default function Inventory({ navigation }) {
  return (
    <View>
      <Text>This is Inventory</Text>
      <NavBar navigation={navigation} activeTab={"Inventory"}/>
    </View>
  );
}

