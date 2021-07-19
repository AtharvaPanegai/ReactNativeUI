/** @format */

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const ActivityComponent = () => {
  return (
    <View>
      <ActivityIndicator size='small' color='#5A20CB' />
      <ActivityIndicator size='large' color='#6A1B4D' />
      <ActivityIndicator size='large' color='#03C6C7' />
    </View>
  );
};

export default ActivityComponent;

const styles = StyleSheet.create({});
