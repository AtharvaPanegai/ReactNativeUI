/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const ScreenThree = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center",flex : 1 }}>
      <Text>Notifications</Text>
    </View>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name='ScreenOne'
        component={Screen1}
        options={{
          tabBarIcon: () => <Entypo name='home' size={30} color='black' />,
          title: "Home",
        }}
      />
      <BottomTab.Screen
        name='ScreenTwo'
        component={Screen2}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name='user-alt' size={24} color='black' />
          ),
          title: "Account",
        }}
      />
      <BottomTab.Screen
        name='ScreenThree'
        component={ScreenThree}
        options={{
          tabBarIcon: () => (
            <Entypo name="bell" size={24} color="black" />
          ),
          title: "Notifications",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
