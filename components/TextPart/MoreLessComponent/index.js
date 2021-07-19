/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

const MoreOrLessComponent = () => {
  const [text] = useState(
    "Lorem Ipsum is simply dummy txt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  );
  const [showFull, setShowFull] = useState(false);

  return (
    <View style={styles.container}>
      {showFull ? (
        <Text>
          {text}
          <Text style={styles.toggleText} onPress={() => setShowFull(false)}>
            {"Less"}
          </Text>
        </Text>
      ) : (
        <Text>
          {text.split(".")[0] + "."}
          <Text style={styles.toggleText} onPress={() => setShowFull(true)}>
            {"More"}
          </Text>
        </Text>
      )}
    </View>
  );
};

export default MoreOrLessComponent;

