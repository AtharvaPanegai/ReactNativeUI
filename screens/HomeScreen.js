/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ComponentContainer from '../components/componentContainer';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ComponentContainer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
