/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#c3a9f0", "transparent"]}
          style={styles.background}
        />
        <Text style={styles.RegisterYourSelfText}>Register Yourself</Text>

        <View style={styles.inputContainer}>
          <Input
            placeholder='Name'
            autoFocus={true}
            keyboardType='name-phone-pad'
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder='Email'
            autoFocus={true}
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder='Mobile Number'
            autoFocus={true}
            keyboardType='name-phone-pad'
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
          />
          <Input
            placeholder='Password'
            secureTextEntry={true}
            keyboardType='default'
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() =>{}}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: 5 }}>Already have an Account</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.RegisterButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

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
    elevation: 20,
    paddingRight: 91,
    paddingLeft: 91,
    //   marginBottom: 100,
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
  RegisterYourSelfText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 50,
  },
});
