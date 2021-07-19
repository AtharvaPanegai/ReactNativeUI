/** @format */

import React from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";

const SimpleButtonComponent = () => {
  return (
    <View>
      <Button
        title='This is Button'
        onPress={() => Alert.alert("Button is Pressed")}
      />
    </View>
  );
};

export default SimpleButtonComponent;

const styles = StyleSheet.create({});
