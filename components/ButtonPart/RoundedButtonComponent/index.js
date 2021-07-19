/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

const RoundedButtonComponent = () => {
  return (
    <View>
      <Button style = {styles.button} rounded success>
        <Text>This is Rounded Button</Text>
      </Button>
    </View>
  );
};

export default RoundedButtonComponent;

const styles = StyleSheet.create({
  button : {
    paddingHorizontal : 20,
  }
});
