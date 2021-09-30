/** @format */

import React from "react";
import { StyleSheet, View, Image, Button, ScrollView } from "react-native";

const UIScreenShower = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2021/09/30/11/07/audbyte-6669840_1280.jpg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
          <Button
              onPress={() => {navigation.navigate("AudbyteSplashScreen")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "AudbyteSplashCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
          </View>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <Image
          style={{ height: 400, width: 200, paddingHorizontal: 10 }}
          source={{
            uri: "https://prescribedhealth.in/wp-content/uploads/2021/06/InstagramClone.jpeg",
          }}
        />
        <View style={styles.rightContainer}>
          <View style={{ padding: 10 }}>
          <Button
              onPress={() => {navigation.navigate("Insta")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "InstaCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
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
          <Button
              onPress={() => {navigation.navigate("Amazon")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "AmazonCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
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
          <Button
              onPress={() => {navigation.navigate("Prescribed")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "PrescribedLogCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
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
            <Button
              onPress={() => {navigation.navigate("prescribedReg")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "PrescribedRegCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
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
            <Button
              onPress={() => {navigation.navigate("SignalLog")}}
              title='View'
              color='#841584'
            />
          </View>
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("ComponentWebView", {
                  screen: "SignalLogCode",
                });
              }}
              title='Source Code'
              color='#841584'
            />
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
    backgroundColor: "white",
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
