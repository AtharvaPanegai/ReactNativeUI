/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input, Image, Button } from "react-native-elements";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#c3a9f0", "transparent"]}
          style={styles.background}
        />

        <Image
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2020/10/final_logo_maybe-removebg-preview.png",
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: 5 }}>OR</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.RegisterButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoContainer: {},
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    width: 300,
  },
  loginButtonText: {
    width: "80%",
    color: "#fff",
    backgroundColor: "#371EE8",
    padding: 20,
    borderRadius: 30,
    elevation: 10,
    borderTopColor: "#fff",
    borderTopWidth: 2,
    paddingRight: 100,
    paddingLeft: 100,
  },
  RegisterButtonText: {
    width: "80%",
    borderWidth: 0.2,
    borderColor: "#371EE8",
    padding: 20,
    paddingRight: 91,
    paddingLeft: 91,
    marginTop: 5,
    borderRadius: 30,
  },
});
