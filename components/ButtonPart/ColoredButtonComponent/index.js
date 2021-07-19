/** @format */

import React from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ColoredButtonComponent = () => {
  return (
    <View style={styles.container}>
        {/* Small Button */}
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => {
          Alert.alert("Small Button Pressed");
        }}>
        <Text style={styles.smallButtonText}>Small Button</Text>
      </TouchableOpacity>
      {/* medium Button  */}
      <TouchableOpacity
        style={styles.mediumButton}
        onPress={() => {
          Alert.alert("Medium Button Pressed");
        }}>
        <Text style={styles.mediumButtonText}>Medium Button</Text>
      </TouchableOpacity>
      {/* Large Button */}
      <TouchableOpacity
        style={styles.largeButton}
        onPress={() => {
          Alert.alert("Large Button Pressed");
        }}>
        <Text style={styles.largeButtonText}>Large Button</Text>
      </TouchableOpacity>

    
    </View>
  );
};

export default ColoredButtonComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  smallButton: {
    backgroundColor: "#05c46b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    marginVertical : 5,
  },
  smallButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  mediumButton : {
    backgroundColor: "#0D0D0D",
    paddingVertical: 22,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    marginVertical : 5,
  },    
  mediumButtonText : {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  largeButtonText : {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  largeButton : {
    backgroundColor: "#2827CC",
    paddingVertical: 26,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    marginVertical : 5,
  }
});
