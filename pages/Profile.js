import React, { useState } from "react";
import {View, Text, FlatList} from "react-native";
import NavBar from "../components/NavBar";

export default function Profile({ navigation }) {
  return (
    <View>
      <Text>This is Profile</Text>
      <NavBar navigation={navigation} activeTab={"Profile"}/>
    </View>
  );
}