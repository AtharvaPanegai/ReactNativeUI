/** @format */

import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextInputMaximumLengthComponent = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder='CreeditCard Number'
      textContentType='creditCardNumber'
      keyboardType='number-pad'
      maxLength={16}
    />
  );
};

export default TextInputMaximumLengthComponent;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#CAD5E2",
    paddingRight : 180,
    paddingLeft : 10,
    borderRadius: 8,
  },
});
