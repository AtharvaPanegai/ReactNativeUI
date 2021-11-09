/** @format */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function ScreenA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen A</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ComponentWebView", { screen: "TopTabCode" });
        }}
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
}
function ScreenB() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen B</Text>
    </View>
  );
}
function ScreenC() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen C</Text>
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name='ScreenA' component={ScreenA} />
      <TopTab.Screen name='ScreenB' component={ScreenB} />
      <TopTab.Screen name='ScreenC' component={ScreenC} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
