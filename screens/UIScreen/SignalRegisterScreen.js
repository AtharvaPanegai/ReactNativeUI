/** @format */

import React, { useLayoutEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { ScrollView } from "react-native";

const SignalregisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageurl, setImageurl] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text h4 style={{ marginBottom: 50 }}>
          Create a Signal Account
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Username'
            autoFocus={true}
            type='text'
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder='Password'
            secureTextEntry={true}
            type='text'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder='ImageUrl (Optional)'
            type='text'
            value={imageurl}
            onChangeText={(text) => setImageurl(text)}
            onSubmitEditing={() =>{}}
          />
        </View>
        <Button
          raised
          onPress={() => {}}
          title='Register'
          containerStyle={styles.registerButton}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignalregisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : "center",
    justifyContent : "center",
    padding : 10,
    backgroundColor : "white",
    
  },
  inputContainer: {
      width : "80%"
  },
  registerButton: {
    borderRadius: 2,
    margin: 5,
    width : "80%",
  },
});
