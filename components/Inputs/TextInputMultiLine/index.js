/** @format */

import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextInputMultiLineComponent = () => {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          { height: 100, paddingVertical: 10, textAlignVertical: "top" },
        ]}
        multiline={true}
        placeholder='Your FeedBack Here!'
      />
    </View>
  );
};

export default TextInputMultiLineComponent;

const styles = StyleSheet.create({
  input: {
    // width: "100%",
    height: 44,
    backgroundColor: "#CAD5E2",
    paddingHorizontal: 10,
    borderRadius: 8,
    paddingRight : 180
  },
});
