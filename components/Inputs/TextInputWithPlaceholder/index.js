/** @format */

import React from "react";
import { Keyboard } from "react-native";
import { StyleSheet, Text, View, TextInput,TouchableWithoutFeedback } from "react-native";

const TextInputWithPlaceholderComponent = () => {
  return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View>
      <TextInput
        style={styles.basicTextInput}
        placeholder='Email Address'
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <TextInput
        style={[
          styles.basicTextInput,
          { backgroundColor: "#444", color: "white"},
        ]}
        placeholder='Coloured Input'
        keyboardType='email-address'
        textContentType='emailAddress'
        placeholderTextColor = "white"
      />
    </View>
    </TouchableWithoutFeedback>
  );
};

export default TextInputWithPlaceholderComponent;

const styles = StyleSheet.create({
  basicTextInput: {
    width: "100%",
    height: 44,
    backgroundColor: "#CAD5E2",
    borderRadius: 6,
    paddingHorizontal: 120,
    marginVertical : 10,
  },
});
