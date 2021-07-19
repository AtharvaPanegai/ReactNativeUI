/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

const IconButtonComponent = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Button style={{ padding: 10, margin: 7 }} dark>
        <FontAwesome name='gear' size={24} color='white' />
      </Button>
      <Button style={{ padding: 10, margin: 7 }} bordered success>
        <Entypo name='home' size={24} color='black' />
      </Button>
      <Button style={{ padding: 10, margin: 7 }} danger>
        <AntDesign name='codesquareo' size={24} color='white' />
      </Button>
      <Button style={{ padding: 10, margin: 7 }} bordered info>
        <AntDesign name='areachart' size={24} color='black' />
      </Button>
    </View>
  );
};

export default IconButtonComponent;

const styles = StyleSheet.create({});
