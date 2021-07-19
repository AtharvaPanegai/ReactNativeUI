/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const TextInputWithButtonComponent = () => {
  const [passwordseen, setPasswordseen] = useState(true);
  return (
    <View style={styles.container}>
      <Entypo name='lock' size={24} color='black' />
      <TextInput
        style={{ flex: 1, paddingHorizontal: 12 }}
        secureTextEntry
        value={passwordseen}
        placeholder='Password'
      />
      <TouchableOpacity style = {{padding : 4}} onPress = {() => {setPasswordseen(!passwordseen)}}>
        <Entypo name='eye' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputWithButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    backgroundColor: "#CAD5E2",
    paddingHorizontal: 10,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
