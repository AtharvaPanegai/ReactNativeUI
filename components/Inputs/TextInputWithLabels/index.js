/** @format */

import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextInputWithLabelsComponent = () => {
  return (
    <View>
      {/* Horizontal Label */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width : 300,
        }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>Name</Text>
        <TextInput
          style={{
            flex: 1,
            height: 44,
            backgroundColor: "#CAD5E2",
            marginLeft: 10,
            borderRadius: 8,
            paddingHorizontal: 10,
            
          }}
        />
      </View>
      {/* Vertical Label */}
      <View style={{ width: "100%", flexDirection: "column", display: "flex" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>Email Address</Text>
        <TextInput
          style={{
            width: "100%",
            height: 44,
            backgroundColor: "#CAD5E2",
            borderRadius: 6,
            marginTop: 6,
            paddingHorizontal: 10,
          }}
          autoCompleteType='email'
          keyboardType='email-address'
        />
      </View>
    </View>
  );
};

export default TextInputWithLabelsComponent;

const styles = StyleSheet.create({});
