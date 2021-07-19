/** @format */

import React, { useState } from "react";
import { StyleSheet,  View } from "react-native";
// yarn add native-base or npm install native-base
import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right,
  Left,
  Text,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const RadioButtonComponent = () => {
  const [choice, setChoice] = useState("One")
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style = {styles.radio}
        onPress = { () => {setChoice("One")}}
      >
        <Text style = {styles.radioText}> Choice One </Text>
        <Radio selected = {choice == "One"} />
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.radio}
        onPress = { () => {setChoice("Two")}}
      >
        <Text style = {styles.radioText}> Choice Two </Text>
        <Radio selected = {choice == "Two"} />
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.radio}
        onPress = { () => {setChoice("Three")}}
      >
        <Text style = {styles.radioText}> Choice Three </Text>
        <Radio  selected = {choice == "Three"} />
      </TouchableOpacity>

    </View>
  );
};

export default RadioButtonComponent;

const styles = StyleSheet.create({
  radio : {
    width : "100%",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingVertical : 4,
    marginTop : 2,
  },
  radioText : {
    fontSize : 20,
    fontWeight : "500",
    color: "black"
  }
});
