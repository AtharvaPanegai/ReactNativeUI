/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
// import { Button } from "native-base";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { Keyboard } from "react-native";



const Signalloginscreen = ({ navigation }) => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light' />
        <Image
          source={{
            uri:
              "https://play-lh.googleusercontent.com/jCln_XT8Ruzp7loH1S6yM-ZzzpLP1kZ3CCdXVEo0tP2w5HNtWQds6lo6aLxLIjiW_X8",
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder='Email'
            autoFocus={true}
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder='PassWord'
            secureTextEntry={true}
            keyboardType='default'
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
          />
        </View>
        <Button containerStyle={styles.button} title='login' onPress={()=> {}} />
        <Button
          containerStyle={styles.button}
          type='outline'
          title='Register'
          
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Signalloginscreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
});
