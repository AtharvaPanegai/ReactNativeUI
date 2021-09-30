import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { WindowWidth } from "../../Dimensions";

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{
          uri: "https://img.freepik.com/free-photo/retro-microphone-isolated-color-background_1387-912.jpg?size=626&ext=jpg",
        }}
      />

      <View style={styles.bottomview}>
        <TouchableOpacity style={styles.loginbutton} 
        onPress={()=>navigation.navigate("Login")}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbutton} 
        onPress={()=>navigation.navigate("Register")}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    marginLeft: -WindowWidth * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomview: {
    flexDirection: "row",

    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  registerbutton: {
    paddingVertical: 7,
    paddingHorizontal: 40,
    borderColor: "black",
    borderWidth: 2,
    margin: 30,
    borderRadius: 5,
    backgroundColor: "black",
  },
  loginbutton: {
    paddingHorizontal: 40,
    paddingVertical: 7,
    borderColor: "black",
    borderWidth: 2,
    margin: 20,
    borderRadius: 5,
  },
});
