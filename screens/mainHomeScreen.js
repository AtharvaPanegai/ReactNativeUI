/** @format */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const mainHomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Text");
          }}>
          <Ionicons name='ios-text' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singleComponentView}>
          {/* Icons */}
          <FontAwesome5 name='icons' size={40} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Icons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Buttons");
          }}>
          {/* Button */}
          <MaterialCommunityIcons
            name='gesture-tap-button'
            size={40}
            color='white'
          />
          <Text style={{ fontSize: 20, color: "white" }}>Buttons</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Input");
          }}>
          {/* Input */}
          <FontAwesome5 name='pencil-alt' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Input</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Switch");
          }}>
          {/* switch */}
          <Ionicons name='md-toggle-sharp' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("CheckBox");
          }}>
          {/* checkBox */}
          <Ionicons name='checkbox' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>checkBox</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Spinner");
          }}>
          {/* spinner */}
          <FontAwesome5 name='spinner' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Spinner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Radio");
          }}>
          {/* radioButton */}
          <Ionicons name='radio-button-on-sharp' size={45} color='white' />
          <Text style={{ fontSize: 16, color: "white" }}>Radio Button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Dropdown");
          }}>
          {/* DropDown */}
          <AntDesign name='caretdown' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>DropDown</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("DatePicker");
          }}>
          {/* DatePicker */}
          <AntDesign name='calendar' size={45} color='white' />
          <Text style={{ fontSize: 16, color: "white" }}>Date Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Modal");
          }}>
          {/* Modal */}
          <Entypo name='notification' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Toast");
          }}>
          {/* Toast */}
          <AntDesign name='message1' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Toast</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("Card");
          }}>
          {/* Cards */}
          <AntDesign name='idcard' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("BottomTabNav", { screen: "ScreenTwo" });
          }}>
          {/* Bottom Tab */}
          <MaterialCommunityIcons
            style={{ transform: [{ rotateX: "180deg" }] }}
            name='table'
            size={45}
            color='white'
          />
          <Text style={{ fontSize: 16, color: "white" }}>Bottom Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("TopTabNavigation", { screen: "ScreenA" });
          }}>
          {/* Top tab */}
          <MaterialCommunityIcons name='table' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Top Tabs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.threeContainerView}>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("UI");
          }}>
          {/* Libraries */}
          <MaterialCommunityIcons name='react' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Libraries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("DrawerNavigation", { screen: "ScreenA" });
          }}>
          {/* Drawer */}
          <Ionicons name='ios-menu' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleComponentView}
          onPress={() => {
            navigation.navigate("UIScreenShower");
          }}>
          {/* UI Screens */}
          <FontAwesome5 name='mobile' size={45} color='white' />
          <Text style={{ fontSize: 20, color: "white" }}>UI Screen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default mainHomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  singleComponentView: {
    backgroundColor: "#0D0D0D",
    paddingTop: 15,
    // paddingVertical : 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: 0.28 * Dimensions.get("window").width,
    height: 0.15 * Dimensions.get("window").height,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  threeContainerView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
