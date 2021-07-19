/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

const BlockButtonComponent = () => {
  return (
    <View style = {styles.container}>
      <Button block success>
        <Text>This is BlockButton </Text>
      </Button>
    </View>
  );
};

export default BlockButtonComponent;

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
        paddingHorizontal : 20,
    }
});
