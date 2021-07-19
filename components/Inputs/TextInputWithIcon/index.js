/** @format */

import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
// if you are using other than expo please import icon from ReactNativeElements
// npm install react-native-elements or yarn add react-native-elements
import { Feather } from "@expo/vector-icons";

const TextInputWithIconComponent = () => {
  return (
    <View style={styles.container}>
      <Feather name='user' size={24} color='#333' />
      <TextInput style = {{flex : 1,paddingHorizontal : 12}} placeholder = "Full Name" />
    </View>
  );
};

export default TextInputWithIconComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    backgroundColor: "#CAD5E2",
    paddingHorizontal: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
