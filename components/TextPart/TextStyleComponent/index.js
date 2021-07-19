/** @format */

import React from "react";
import { StyleSheet, Text,View } from "react-native";

const TextStyleComponent = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontStyle: "italic",
          alignSelf: "flex-start",
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
      <Text
        style={{
          fontWeight: "500",
          alignSelf: "flex-start",
          fontSize: 16,
          marginTop: 4,
        }}>
        Semi Bold
      </Text>
      <Text
        style={{
          fontWeight: "700",
          alignSelf: "flex-start",
          fontSize: 16,
          marginTop: 4,
        }}>
        Bold
      </Text>
      <Text
        style={{
          fontWeight: "900",
          alignSelf: "flex-start",
          fontSize: 16,
          marginTop: 4,
        }}>
        Extra Bold
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 16,
          marginTop: 10,
          textDecorationLine: "underline",
        }}>
        This is UnderLined Sentence
      </Text>
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 16,
          marginTop: 10,
          textDecorationLine: "line-through",
        }}>
        This is LineThrough Sentence
      </Text>
    </View>
  );
};

export default TextStyleComponent;

const styles = StyleSheet.create({
  container: {

    justifyContent: "center",
    alignItems: "center",
  },
  italicText: {
    fontSize: 16,
    fontStyle: "italic",
    alignSelf: "flex-start",
  },
});
