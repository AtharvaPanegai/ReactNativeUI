/** @format */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Screen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Screen 1</Text>
      <TouchableOpacity
       onPress={() => {navigation.navigate("ComponentWebView",{screen : "BottomTabCode"})}}
        style={{
          backgroundColor: "#242B2E",
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 8,
        }}>
        <Text style={{ color: "white" }}>Source Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
