/** @format */

// import {  } from "native-base";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

const Screen2 = ({navigation}) => {
  return (
    <View style={{ flex : 1,justifyContent: "center", alignItems: "center" }}>
      <Text>This is Screen 2</Text>
      <Button title = "Button" onPress = {() => {navigation.navigate("MainHome")}} />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
