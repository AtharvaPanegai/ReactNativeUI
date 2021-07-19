/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import ToastComponent from "../components/ToastComponent";

const ToastScreen = ([navigation]) => {
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
          DropDown
        </Card.Title>

        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}>
          <View>
            {/* Component Goes Here */}
            {/* Component should be without flex : 1 */}

            <Card.Divider style={{ marginTop: 20 }} />
            <ToastComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "ToastCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default ToastScreen;
