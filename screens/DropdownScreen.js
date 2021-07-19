/** @format */

import * as React from "react";
// install react-native-elements by yarn add react-native-elements or npm install react-native-elements
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import DropdownComponent from "../components/DropdownComponent";

const DropdownScreen = ({ navigation }) => {
  return (
    <View style = {{justifyContent : "center",alignItems : "center"}} >
      <Card
        containerStyle={{ width: "90%", marginVertical: 10 }}
        wrapperStyle={{}}>
        <Card.Title
          style={{
            fontSize: 20,
            backgroundColor: "#242B2E",
            color: "white",
            fontWeight: "100",
            paddingVertical: 15,
          }}>
          Simple Button
        </Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}>
          <View>
            {/* Component Goes Here */}
            {/* Component should be without flex : 1 */}
            <DropdownComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity
          >
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              Source Code
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default DropdownScreen;
