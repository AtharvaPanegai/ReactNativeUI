/** @format */

import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// your app directory must have @react-navigation/native
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen A</Text>
      <Button
        title='Open Drawer'
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <TouchableOpacity
       onPress={() => {navigation.navigate("ComponentWebView",{screen : "DrawerCode"})}}
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

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='ScreenA'>
      <Drawer.Screen name='ScreenA' component={ScreenA} />
      <Drawer.Screen name='ScreenB' component={ScreenB} />
      <Drawer.Screen name='ScreenC' component={ScreenC} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
