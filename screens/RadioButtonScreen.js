/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView } from "react-native";
import RadioButtonComponent from "../components/RadioButtonComponent";

const RadioButton = () => {
  return (
    <View>
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
          Radio Button
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
            <RadioButtonComponent />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default RadioButton;
