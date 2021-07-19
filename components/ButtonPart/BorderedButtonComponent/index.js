/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

const BorderedButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} bordered>
        <Text>Primary</Text>
      </Button>
      <Button style={styles.button} bordered success>
        <Text>Success</Text>
      </Button>
      <Button style={styles.button} bordered info>
        <Text>Info</Text>
      </Button>
      <Button style={styles.button} bordered warning>
        <Text>Warning</Text>
      </Button>
    </View>
  );
};

export default BorderedButtonComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 5,
    paddingHorizontal : 10,
  },
});
