/** @format */

import React from "react";
import { StyleSheet, View, Image, Button, ScrollView } from "react-native";

const UIScreenShower = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/InstagramClone.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='View' color='#841584' />
          </View>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='Source Code' color='#841584' />
          </View>
        </View>
      </View>

      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/ProductScreen.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='View' color='#841584' />
          </View>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='Source Code' color='#841584' />
          </View>
        </View>
      </View>

      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/PrescribedScren.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='View' color='#841584' />
          </View>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='Source Code' color='#841584' />
          </View>
        </View>
      </View>

      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/PrescribedRegisterScreen.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='View' color='#841584' />
          </View>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='Source Code' color='#841584' />
          </View>
        </View>
      </View>

      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/SignalClone.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='View' color='#841584' />
          </View>
          <View style={{ padding: 10 }}>
            <Button onPress={() => {}} title='Source Code' color='#841584' />
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default UIScreenShower;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor :"white"
  },

  leftContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  rightContainer: {
    flex: 1,
  },
});

// {
//   img: "https://prescribedhealth.in/wp-content/uploads/2021/06/InstagramClone.jpeg",
//   name: "Instagram Clone",
// },
// {
//   img: "https://prescribedhealth.in/wp-content/uploads/2021/06/ProductScreen.jpeg",
//   name: "Product List",
// },
// {
//   img: "https://prescribedhealth.in/wp-content/uploads/2021/06/PrescribedScren.jpeg",
//   name: "Prescribed Login",
// },
// {
//   img: "https://prescribedhealth.in/wp-content/uploads/2021/06/PrescribedRegisterScreen.jpeg",
//   name: "Prescribed Register ",
// },
// {
//   img: "https://prescribedhealth.in/wp-content/uploads/2021/06/SignalClone.jpeg",
//   name: "Signal Login ",
// // },
