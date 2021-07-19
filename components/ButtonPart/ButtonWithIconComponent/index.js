/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

const ButtonWithIconComponent = () => {
  return (
    <View>
      <Button style = {styles.button} iconLeft dark>
      <FontAwesome name="gear" size={24} color="white" />
        <Text style = {{color : "white",marginLeft : 10,}}>Settings</Text>
      </Button>
    </View>
  );
};

export default ButtonWithIconComponent;

const styles = StyleSheet.create({
  button : {
    paddingHorizontal : 20,
  }
});
