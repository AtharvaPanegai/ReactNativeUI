/** @format */

import React from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
// yarn add react-native-ratings
import { Rating } from "react-native-ratings";

const RatingsComponent = () => {
  return (
    <View style={styles.container}>
      <Rating
        onFinishRating={(rating) => {
          Alert.alert("Star Rating  : " + JSON.stringify(rating));
        }}
        style={{ paddingVertical: 10 }}
      />
      <Rating
      type = "heart"
      ratingCount = {3}
      imageSize = {60}
        onFinishRating={(rating) => {
          Alert.alert("Heart Rating  : " + JSON.stringify(rating));
        }}
        style={{ paddingVertical: 10 }}
      />
    </View>
  );
};

export default RatingsComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
