/** @format */

import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// yarn add react-native-card-flip
import CardFlip from "react-native-card-flip";

const RNFlipCardComponent = () => {
  const flipCard = useRef();
  return (
    <View>
      <CardFlip ref={flipCard} style={{ width: 250, height: 300 }}>
        <TouchableOpacity
          style={{
            width: 250,
            height: 300,
            backgroundColor: "#51E1ED",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => {
            flipCard.current.flip();
          }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
            How many Days are in the year?
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              marginTop: 14,
            }}>
            Click to See the Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 250,
            height: 300,
            backgroundColor: "#8D3DAF",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => {
            flipCard.current.flip();
          }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
            52 weeks
          </Text>
          {/* <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 18,
              marginTop: 14,
            }}>
            Click to See the Answer
          </Text> */}
        </TouchableOpacity>
      </CardFlip>
    </View>
  );
};

export default RNFlipCardComponent;

const styles = StyleSheet.create({});
